import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function OrdersPage() {
  const [orders, setOrders] = useState([]); // State to store all orders
  const [products, setProducts] = useState({}); // State to store product details
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const navigate = useNavigate();

  // Fetch all orders for the logged-in user
  useEffect(() => {
    const fetchOrdersAndProducts = async () => {
      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token");

      if (!userId || !token) {
        alert("Please log in to view your orders.");
        navigate("/login");
        return;
      }

      try {
        // Fetch all orders for the user
        const ordersResponse = await axios.get(`http://localhost:5000/api/orders/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (ordersResponse.data.length === 0) {
          setError("No orders found.");
          setLoading(false);
          return;
        }

        setOrders(ordersResponse.data);

        // Fetch product details for all items in all orders
        const productIds = ordersResponse.data.flatMap((order) =>
          order.items.map((item) => item.productId)
        );

        const uniqueProductIds = [...new Set(productIds)]; // Remove duplicates

        const productsResponse = await Promise.all(
          uniqueProductIds.map(async (productId) => {
            const productResponse = await axios.get(`http://localhost:5000/api/products/${productId}`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            return productResponse.data;
          })
        );

        // Create a map of productId -> product details
        const productsMap = productsResponse.reduce((map, product) => {
          map[product._id] = product;
          return map;
        }, {});

        setProducts(productsMap);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setError("Failed to fetch orders. Please try again.");
        setLoading(false);
      }
    };

    fetchOrdersAndProducts();
  }, [navigate]);

  if (loading) {
    return (
      <div className="container mt-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-2">Loading orders...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
        <button
          className="btn btn-primary"
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Your Orders</h2>
      {orders.length === 0 ? (
        <div className="alert alert-info">No orders found.</div>
      ) : (
        orders.map((order) => (
          <div key={order._id} className="card mb-4 shadow-sm">
            <div className="card-header bg-light">
              <h5 className="card-title mb-0">
                Order ID: <span className="text-muted">{order._id}</span>
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <p className="card-text">
                    <strong>Status:</strong>{" "}
                    <span className="badge bg-primary">{order.orderStatus}</span>
                  </p>
                </div>
                <div className="col-md-6 text-md-end">
                  <p className="card-text">
                    <strong>Total Amount:</strong> ${order.totalAmount.toFixed(2)}
                  </p>
                </div>
              </div>
              <hr />
              <h6 className="mb-3">Items:</h6>
              <ul className="list-group">
                {order.items.map((item) => {
                  const product = products[item.productId]; // Get product details
                  return (
                    <li key={item.productId} className="list-group-item">
                      <div className="row align-items-center">
                        <div className="col-md-6">
                          {product ? (
                            <>
                              <strong>Product Name:</strong> {product.name}
                            </>
                          ) : (
                            "Product details not available"
                          )}
                        </div>
                        <div className="col-md-3">
                          <strong>Quantity:</strong> {item.quantity}
                        </div>
                        <div className="col-md-3 text-md-end">
                          <strong>Price:</strong> ${item.price.toFixed(2)}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="card-footer bg-light">
              <small className="text-muted">
                Order placed on: {new Date(order.createdAt).toLocaleDateString()}
              </small>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default OrdersPage;