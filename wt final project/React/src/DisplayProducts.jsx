// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";
// import mongoose from "mongoose"; // Import mongoose for ObjectId validation

// function DisplayProducts() {
//   const { categoryName } = useParams(); // Get the category name from the URL
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [quantities, setQuantities] = useState({}); // State to manage quantities for each product
//   const navigate = useNavigate(); // Initialize useNavigate for redirection

//   // Fetch products by category
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const token = localStorage.getItem("token"); // Get the JWT token from localStorage
//         const response = await axios.get(
//           `http://localhost:5000/api/products/category/${categoryName}`,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`, // Include the JWT token in the headers
//             },
//           }
//         );
//         setProducts(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//         setError("Failed to fetch products. Please try again.");
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, [categoryName]);

//   // Handle increment quantity
//   const handleIncrement = (productId) => {
//     setQuantities((prevQuantities) => ({
//       ...prevQuantities,
//       [productId]: (prevQuantities[productId] || 0) + 1,
//     }));
//   };

//   // Handle decrement quantity
//   const handleDecrement = (productId) => {
//     setQuantities((prevQuantities) => ({
//       ...prevQuantities,
//       [productId]: Math.max((prevQuantities[productId] || 0) - 1, 0), // Ensure quantity doesn't go below 0
//     }));
//   };

//   // Handle add to cart
//   const handleAddToCart = async (productId) => {
//     const userId = localStorage.getItem("userId"); // Get the logged-in user's ID from localStorage
//     const token = localStorage.getItem("token"); // Get the JWT token from localStorage
//     console.log(userId);
//     // Validate userId and token
//     if (!userId || !token || !mongoose.Types.ObjectId.isValid(userId)) {
//       alert("Please log in to add products to the cart.");
//       navigate("/login"); // Redirect to the login page
//       return;
//     }

//     const quantity = quantities[productId] || 1; // Default to 1 if quantity is not set

//     try {
//       // Call the add to cart API
//       const response = await axios.post(
//         "http://localhost:5000/api/cart/",
//         {
//           userId: userId, // Include the userId in the payload
//           items: [
//             {
//               _id: productId, // Using _id as the product identifier
//               quantity: quantity,
//             },
//           ],
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`, // Include the JWT token in the headers
//           },
//         }
//       );

//       if (response.data.message) {
//         alert(response.data.message); // Show success message
//       }
//     } catch (error) {
//       console.error("Error adding product to cart:", error);
//       if (error.response) {
//         console.error("Server responded with:", error.response.data);
//       }
//       alert("Failed to add product to cart. Please try again.");
//     }
//   };

//   // Display loading state
//   if (loading) {
//     return <div>Loading products...</div>;
//   }

//   // Display error state
//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   // Display message if no products are available
//   if (products.length === 0) {
//     return (
//       <div className="container mt-5">
//         <h2>Products in {categoryName}</h2>
//         <div className="alert alert-info" role="alert">
//           No products available in this category right now.
//         </div>
//       </div>
//     );
//   }

//   // Display products
//   return (
//     <div className="container mt-5">
//       <h2>Products in {categoryName}</h2>
//       <div className="row">
//         {products.map((product) => (
//           <div key={product._id} className="col-md-2 col-sm-4 col-6 mb-4">
//             <div className="card h-100">
//               <img
//                 src={product.images[0]}
//                 className="card-img-top"
//                 alt={product.name}
//                 style={{ height: "150px", objectFit: "cover" }}
//               />
//               <div className="card-body">
//                 <h5 className="card-title">{product.name}</h5>
//                 <p className="card-text">${product.price}</p>
//                 <p className="card-text">{product.description}</p>
//                 <div className="d-flex align-items-center justify-content-between">
//                   <div className="btn-group">
//                     <button
//                       className="btn btn-outline-secondary btn-sm"
//                       onClick={() => handleDecrement(product._id)}
//                     >
//                       -
//                     </button>
//                     <span className="mx-2">{quantities[product._id] || 0}</span>
//                     <button
//                       className="btn btn-outline-secondary btn-sm"
//                       onClick={() => handleIncrement(product._id)}
//                     >
//                       +
//                     </button>
//                   </div>
//                   <button
//                     className="btn btn-primary btn-sm"
//                     onClick={() => handleAddToCart(product._id)}
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default DisplayProducts;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import mongoose from "mongoose"; // Import mongoose for ObjectId validation

function DisplayProducts() {
  const { categoryName } = useParams(); // Get the category name from the URL
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantities, setQuantities] = useState({}); // State to manage quantities for each product
  const navigate = useNavigate(); // Initialize useNavigate for redirection

  // Fetch products based on category or all products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem("token"); // Get the JWT token from localStorage
        let url = "http://localhost:5000/api/products"; // Default URL for fetching all products

        // If a specific category is selected, fetch products by category
        if (categoryName && categoryName !== "all") {
          url = `http://localhost:5000/api/products/category/${categoryName}`;
        }

        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`, // Include the JWT token in the headers
          },
        });

        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Failed to fetch products. Please try again.");
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryName]);

  // Handle increment quantity
  const handleIncrement = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 0) + 1,
    }));
  };

  // Handle decrement quantity
  const handleDecrement = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max((prevQuantities[productId] || 0) - 1, 0), // Ensure quantity doesn't go below 0
    }));
  };

  // Handle add to cart
  const handleAddToCart = async (productId) => {
    const userId = localStorage.getItem("userId"); // Get the logged-in user's ID from localStorage
    const token = localStorage.getItem("token"); // Get the JWT token from localStorage

    // Validate userId and token
    if (!userId || !token || !mongoose.Types.ObjectId.isValid(userId)) {
      alert("Please log in to add products to the cart.");
      navigate("/login"); // Redirect to the login page
      return;
    }

    const quantity = quantities[productId] || 1; // Default to 1 if quantity is not set

    try {
      // Call the add to cart API
      const response = await axios.post(
        "http://localhost:5000/api/cart/",
        {
          userId: userId, // Include the userId in the payload
          items: [
            {
              _id: productId, // Using _id as the product identifier
              quantity: quantity,
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the JWT token in the headers
          },
        }
      );

      if (response.data.message) {
        alert(response.data.message); // Show success message
      }
    } catch (error) {
      console.error("Error adding product to cart:", error);
      if (error.response) {
        console.error("Server responded with:", error.response.data);
      }
      alert("Failed to add product to cart. Please try again.");
    }
  };

  // Display loading state
  if (loading) {
    return <div>Loading products...</div>;
  }

  // Display error state
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Display message if no products are available
  if (products.length === 0) {
    return (
      <div className="container mt-5">
        <h2>Products in {categoryName === "all" ? "All Categories" : categoryName}</h2>
        <div className="alert alert-info" role="alert">
          No products available right now.
        </div>
      </div>
    );
  }

  // Display products
  return (
    <div className="container mt-5">
      <h2>Products in {categoryName === "all" ? "All Categories" : categoryName}</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product._id} className="col-md-2 col-sm-4 col-6 mb-4">
            <div className="card h-100">
              <img
                src={product.images[0]}
                className="card-img-top"
                alt={product.name}
                style={{ height: "150px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price}</p>
                <p className="card-text">{product.description}</p>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="btn-group">
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() => handleDecrement(product._id)}
                    >
                      -
                    </button>
                    <span className="mx-2">{quantities[product._id] || 0}</span>
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() => handleIncrement(product._id)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => handleAddToCart(product._id)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayProducts;