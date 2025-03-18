
import "./Cart.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

function Cart() {
  const [cart, setCart] = useState({ items: [] }); // Cart items
  const [products, setProducts] = useState([]); // Product details
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const navigate = useNavigate(); // Initialize useNavigate for redirection

  // Get the logged-in user's ID and token from localStorage
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  // Fetch cart and product data
  useEffect(() => {
    const fetchCartAndProducts = async () => {
      try {
        if (!userId || !token) {
          throw new Error("User not logged in");
        }

        // Fetch cart data for the logged-in user
        const cartResponse = await axios.get(`http://localhost:5000/api/cart/user/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the request
          },
        });
        const cartData = cartResponse.data;
        console.log("Cart Data:", cartData); // Debugging

        // Ensure cartData has an `items` array
        if (!cartData.items || !Array.isArray(cartData.items)) {
          throw new Error("Invalid cart data structure");
        }

        setCart({ items: cartData.items });

        // Fetch product details for items in the cart
        const productIds = cartData.items.map((item) => item._id);
        if (productIds.length === 0) {
          setProducts([]);
          setLoading(false);
          return;
        }

        // Fetch each product individually
        const productsData = await Promise.all(
          productIds.map(async (id) => {
            try {
              const productResponse = await axios.get(`http://localhost:5000/api/products/${id}`, {
                headers: {
                  Authorization: `Bearer ${token}`, // Include the token in the request
                },
              });
              console.log(productResponse);
              return productResponse.data;
            } catch (error) {
              console.error(`Error fetching product ${id}:`, error);
              return null; // Return null for invalid products
            }
          })
        );

        // Filter out null values (invalid products)
        const validProducts = productsData.filter((product) => product !== null);
        console.log("Valid Products Data:", validProducts); // Debugging

        // Ensure validProducts is an array
        if (!Array.isArray(validProducts)) {
          throw new Error("Invalid products data structure");
        }

        setProducts(validProducts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchCartAndProducts();
  }, [userId, token]);

  // Calculate subtotal
  const calculateSubtotal = () => {
    return cart.items.reduce((total, item) => {
      const product = products.find((p) => p._id === item._id);
      return total + (product ? product.price * item.quantity : 0);
    }, 0);
  };

  // Calculate total (including shipping)
  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const shipping = 20.0; // Fixed shipping cost
    return subtotal + shipping;
  };

  // Handle quantity change
  const handleQuantityChange = async (_id, newQuantity) => {
    if (newQuantity < 1) return;

    try {
      // Update the cart on the backend
      await axios.put(
        `http://localhost:5000/api/cart`,
        {
          userId,
          items: cart.items.map((item) =>
            item._id === _id ? { ...item, quantity: newQuantity } : item
          ),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the request
          },
        }
      );

      // Update the local state
      const updatedItems = cart.items.map((item) =>
        item._id === _id ? { ...item, quantity: newQuantity } : item
      );
      setCart({ ...cart, items: updatedItems });
    } catch (error) {
      console.error("Error updating cart:", error);
      setError("Failed to update cart. Please try again.");
    }
  };

  // Handle item removal
  const handleRemoveItem = async (_id) => {
    try {
      // Update the cart on the backend
      await axios.put(
        `http://localhost:5000/api/cart`,
        {
          userId,
          items: cart.items.filter((item) => item._id !== _id),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the request
          },
        }
      );

      // Update the local state
      const updatedItems = cart.items.filter((item) => item._id !== _id);
      setCart({ ...cart, items: updatedItems });
    } catch (error) {
      console.error("Error removing item from cart:", error);
      setError("Failed to remove item. Please try again.");
    }
  };

  const handleCheckout = async () => {
    try {
      // Place the order
      const orderResponse = await axios.post(
        `http://localhost:5000/api/orders/place`,
        {
          userId,
          items: cart.items.map((item) => ({
            productId: item._id,
            quantity: item.quantity,
            price: products.find((p) => p._id === item._id)?.price || 0,
          })),
          totalAmount: calculateTotal(),
          orderStatus: "Placed",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the request
          },
        }
      );
  
      if (orderResponse.data.message) {
        alert("Order placed successfully!");
  
        // Clear the cart on the backend
        await axios.put(
          `http://localhost:5000/api/cart`,
          {
            userId,
            items: [], // Empty the cart
          },
          {
            headers: {
              Authorization: `Bearer ${token}`, // Include the token in the request
            },
          }
        );
  
        // Update the local state to reflect the empty cart
        setCart({ items: [] });
  
        // Redirect to the Order Placed Page
        navigate("/order-placed");
      }
    } catch (error) {
      console.error("Error during checkout:", error);
      setError("Failed to place order. Please try again.");
    }
  };

  // Display loading state
  if (loading) {
    return (
      <div className="container mt-5 p-3 rounded cart">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <p>Loading cart...</p>
      </div>
    );
  }

  // Display error state
  if (error) {
    return (
      <div className="container mt-5 p-3 rounded cart">
        <p>Error: {error}</p>
        <button
          className="btn btn-primary"
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </div>
    );
  }

  // Display empty cart
  if (cart.items.length === 0) {
    return (
      <div className="container mt-5 p-3 rounded cart">
        <p>Your cart is empty.</p>
        <button
          className="btn btn-primary"
          onClick={() => (window.location.href = "/")}
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-5 p-3 rounded cart">
      <div className="row no-gutters">
        {/* Left Side - Cart Items */}
        <div className="col-md-8">
          <div className="product-details mr-2">
            <div className="d-flex flex-row align-items-center">
              <i className="fa fa-long-arrow-left"></i>
              <span className="ml-2">Continue Shopping</span>
            </div>
            <hr />
            <h6 className="mb-0">Shopping cart</h6>
            <div className="d-flex justify-content-between">
              <span>You have {cart.items.length} items in your cart</span>
              <div className="d-flex flex-row align-items-center">
                <span className="text-black-50">Sort by:</span>
                <div className="price ml-2">
                  <span className="mr-1">price</span>
                  <i className="fa fa-angle-down"></i>
                </div>
              </div>
            </div>

            {/* Render Cart Items */}
            {cart.items.map((item) => {
              const product = products.find((p) => p._id === item._id);
              if (!product) return null;

              return (
                <div key={item._id} className="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
                  <div className="d-flex flex-row">
                    <img className="rounded" src={product.images[0]} width="40" alt={product.name} />
                    <div className="ml-2">
                      <span className="font-weight-bold d-block">{product.name}</span>
                      <span className="spec">{product.category}</span>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center">
                    <span className="d-block">{item.quantity}</span>
                    <span className="d-block ml-5 font-weight-bold">${(product.price * item.quantity).toFixed(2)}</span>
                    <i
                      className="fa fa-trash-o ml-3 text-black-50"
                      onClick={() => handleRemoveItem(item._id)}
                      style={{ cursor: "pointer" }}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side - Payment Info */}
        <div className="col-md-4">
          <div className="payment-info">
            <div className="d-flex justify-content-between align-items-center">
              <span>Card details</span>
              <img className="rounded" src="https://i.imgur.com/WU501C8.jpg" width="30" alt="Card" />
            </div>
            <span className="type d-block mt-3 mb-1">Card type</span>
            <label className="radio">
              <input type="radio" name="card" value="payment" defaultChecked />
              <span>
                <img width="30" src="https://img.icons8.com/color/48/000000/mastercard.png" alt="Mastercard" />
              </span>
            </label>
            <label className="radio">
              <input type="radio" name="card" value="payment" />
              <span>
                <img width="30" src="https://img.icons8.com/officel/48/000000/visa.png" alt="Visa" />
              </span>
            </label>
            <label className="radio">
              <input type="radio" name="card" value="payment" />
              <span>
                <img width="30" src="https://img.icons8.com/ultraviolet/48/000000/amex.png" alt="Amex" />
              </span>
            </label>
            <label className="radio">
              <input type="radio" name="card" value="payment" />
              <span>
                <img width="30" src="https://img.icons8.com/officel/48/000000/paypal.png" alt="PayPal" />
              </span>
            </label>

            <div>
              <label className="credit-card-label">Name on card</label>
              <input type="text" className="form-control credit-inputs" placeholder="Name" />
            </div>
            <div>
              <label className="credit-card-label">Card number</label>
              <input type="text" className="form-control credit-inputs" placeholder="0000 0000 0000 0000" />
            </div>
            <div className="row">
              <div className="col-md-6">
                <label className="credit-card-label">Date</label>
                <input type="text" className="form-control credit-inputs" placeholder="12/24" />
              </div>
              <div className="col-md-6">
                <label className="credit-card-label">CVV</label>
                <input type="text" className="form-control credit-inputs" placeholder="342" />
              </div>
            </div>
            <hr className="line" />

            {/* Display Totals */}
            <div className="d-flex justify-content-between information">
              <span>Subtotal</span>
              <span>${calculateSubtotal().toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between information">
              <span>Shipping</span>
              <span>$20.00</span>
            </div>
            <div className="d-flex justify-content-between information">
              <span>Total (Incl. taxes)</span>
              <span>${calculateTotal().toFixed(2)}</span>
            </div>

            {/* Checkout Button */}
            <button
              className="btn btn-primary btn-block d-flex justify-content-between mt-3"
              type="button"
              onClick={handleCheckout}
            >
              <span>${calculateTotal().toFixed(2)}</span>
              <span>
                Checkout <i className="fa fa-long-arrow-right ml-1"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;