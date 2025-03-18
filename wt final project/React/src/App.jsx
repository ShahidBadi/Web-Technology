// import { useState, useEffect } from 'react';
// import './App.css';
// import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
// import Navbar from './Navbar';
// import Category from './Category';
// import BestSellingProducts from './BestSellingProducts';
// import Banner from './Banner';
// import Banner2 from './Banner2';
// import FeaturedProducts from './FeaturedProducts';
// import Banner3 from './Banner3';
// import PopularProduct from './PopularProduct';
// import Footer from './Footer';
// import Login from './Login';
// import Cart from './Cart';
// import DisplayProducts from './DisplayProducts';
// import OrderPlaced from './OrderPlaced'; // Import the OrderPlaced component

// // ProtectedRoute component
// const ProtectedRoute = ({ isLoggedIn, children }) => {
//   if (!isLoggedIn) {
//     return <Navigate to="/login" replace />;
//   }
//   return children;
// };

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Check if the user is already logged in (e.g., on page reload)
//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     const userId = localStorage.getItem('userId');
//     if (token) {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   // Handle login
//   const handleLogin = () => {
//     setIsLoggedIn(true);
//   };

//   // Handle logout
//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('userId'); // Clear userId on logout
//     setIsLoggedIn(false);
//   };

//   return (
//     <>
//       <BrowserRouter>
//         {/* Pass isLoggedIn and handleLogout to Navbar */}
//         <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
//         <Routes>
//           {/* Pass handleLogin to Login component */}
//           <Route path="/login" element={<Login onLogin={handleLogin} />} />

//           {/* Protect the /cart route */}
//           <Route
//             path="/cart"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn}>
//                 <Cart />
//               </ProtectedRoute>
//             }
//           />

//           {/* Add the Order Placed route */}
//           <Route
//             path="/order-placed"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn}>
//                 <OrderPlaced />
//               </ProtectedRoute>
//             }
//           />

//           {/* Add the DisplayProducts route */}
//           <Route path="/products/:categoryName" element={<DisplayProducts />} />

//           {/* Home route */}
//           <Route
//             path="/"
//             element={
//               <>
//                 <Banner />
//                 <Category />
//                 <BestSellingProducts />
//                 <Banner2 />
//                 <FeaturedProducts />
//                 <Banner3 />
//                 <PopularProduct />
//                 <Footer />
//               </>
//             }
//           />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;

import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { useEffect,useState } from "react";
import Navbar from "./Navbar";
import Category from "./Category";
import BestSellingProducts from "./BestSellingProducts";
import Banner from "./Banner";
import Banner2 from "./Banner2";
import FeaturedProducts from "./FeaturedProducts";
import Banner3 from "./Banner3";
import PopularProduct from "./PopularProduct";
import Footer from "./Footer";
import Login from "./Login";
import Cart from "./Cart";
import DisplayProducts from "./DisplayProducts";
import OrderPlaced from "./OrderPlaced";
import OrdersPage from "./OrdersPage"; // Import the OrdersPage component

// ProtectedRoute component
const ProtectedRoute = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if the user is already logged in (e.g., on page reload)
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  // Handle login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId"); // Clear userId on logout
    setIsLoggedIn(false);
  };

  return (
    <>
      <BrowserRouter>
        {/* Pass isLoggedIn and handleLogout to Navbar */}
        <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <Routes>
          {/* Pass handleLogin to Login component */}
          <Route path="/login" element={<Login onLogin={handleLogin} />} />

          {/* Protect the /cart route */}
          <Route
            path="/cart"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Cart />
              </ProtectedRoute>
            }
          />

          {/* Add the Order Placed route */}
          <Route
            path="/order-placed"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <OrderPlaced />
              </ProtectedRoute>
            }
          />

          {/* Add the Orders Page route */}
          <Route
            path="/orders"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <OrdersPage />
              </ProtectedRoute>
            }
          />

          {/* Add the DisplayProducts route */}
          <Route path="/products/:categoryName" element={<DisplayProducts />} />

          {/* Home route */}
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Category />
                <BestSellingProducts />
                <Banner2 />
                <FeaturedProducts />
                <Banner3 />
                <PopularProduct />
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;