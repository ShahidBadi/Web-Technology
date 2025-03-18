import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function OrderPlaced() {
  const [order, setOrder] = useState(null);
  const [products, setProducts] = useState([]); // State to store product details
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetch the latest order for the logged-in user
  useEffect(() => {
    const fetchLatestOrder = async () => {
      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token");

      if (!userId || !token) {
        alert("Please log in to view your order.");
        navigate("/login");
        return;
      }

      try {
        // Fetch the latest order
        const orderResponse = await axios.get(`http://localhost:5000/api/orders/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (orderResponse.data.length > 0) {
          const latestOrder = orderResponse.data[orderResponse.data.length - 1];
          setOrder(latestOrder);

          // Fetch product details for each item in the order
          const productIds = latestOrder.items.map((item) => item.productId);
          const productsResponse = await Promise.all(
            productIds.map(async (productId) => {
              const productResponse = await axios.get(`http://localhost:5000/api/products/${productId}`, {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              });
              return productResponse.data;
            })
          );

          setProducts(productsResponse); // Store product details
        } else {
          setError("No orders found.");
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching order details:", error);
        setError("Failed to fetch order details. Please try again.");
        setLoading(false);
      }
    };

    fetchLatestOrder();
  }, [navigate]);

  if (loading) {
    return <div>Loading order details...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mt-5">
      <h2>Order Placed Successfully!</h2>
      {order && (
        <div className="card mt-4">
          <div className="card-body">
            <h5 className="card-title">Order ID: {order._id}</h5>
            <p className="card-text">Status: {order.orderStatus}</p>
            <p className="card-text">Total Amount: ${order.totalAmount}</p>
            <h6>Items:</h6>
            <ul>
              {order.items.map((item, index) => {
                const product = products[index]; // Get the corresponding product details
                return (
                  <li key={item.productId}>
                    {product ? (
                      <>
                        <strong>Product Name:</strong> {product.name}, <strong>Quantity:</strong> {item.quantity},{" "}
                        <strong>Price:</strong> ${item.price}
                      </>
                    ) : (
                      "Product details not available"
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderPlaced;