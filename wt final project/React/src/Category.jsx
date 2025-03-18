
// import { useState, useEffect } from "react";
// import axios from "axios";
// import Swiper from "swiper";
// import { Navigation } from "swiper/modules"; // Import Navigation from 'swiper/modules'
// import "swiper/css";
// import "swiper/css/navigation";
// import { useNavigate } from "react-router-dom"; // Import useNavigate

// function Category() {
//   const [items, setItems] = useState([]);
//   const navigate = useNavigate(); // Initialize useNavigate

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/categories")
//       .then((response) => {
//         console.log("API Response:", response.data);
//         setItems(response.data);
//       })
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   useEffect(() => {
//     if (items.length > 0) {
//       new Swiper(".category-carousel", {
//         modules: [Navigation],
//         slidesPerView: 6,
//         spaceBetween: 20,
//         navigation: {
//           nextEl: ".category-carousel-next",
//           prevEl: ".category-carousel-prev",
//         },
//         loop: true,
//       });
//     }
//   }, [items]);

//   // Function to handle category click
//   const handleCategoryClick = (categoryName) => {
//     navigate(`/products/${categoryName}`); // Navigate to DisplayProducts page with category name
//   };

//   return (
//     <section className="py-5 overflow-hidden">
//       <div className="container-lg">
//         <div className="row">
//           <div className="col-md-12">
//             <div className="section-header d-flex flex-wrap justify-content-between mb-5">
//               <h2 className="section-title">Category</h2>
//               <div className="d-flex align-items-center">
//                 <a href="#" className="btn btn-primary me-2">
//                   View All
//                 </a>
//                 <div className="swiper-buttons">
//                   <button className="swiper-prev category-carousel-prev btn btn-yellow">
//                     ❮
//                   </button>
//                   <button className="swiper-next category-carousel-next btn btn-yellow">
//                     ❯
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="row">
//           <div className="col-md-12">
//             <div className="category-carousel swiper">
//               <div className="swiper-wrapper">
//                 {items.map((item, index) => (
//                   <div key={item.categoryName || index} className="swiper-slide text-center">
//                     {/* Add onClick to handle category click */}
//                     <div
//                       className="nav-link"
//                       onClick={() => handleCategoryClick(item.categoryName)}
//                       style={{ cursor: "pointer" }} // Make it look clickable
//                     >
//                       <img
//                         src={item.categoryImage}
//                         className="rounded-circle"
//                         alt={item.categoryName}
//                         style={{ width: "120px", height: "120px", objectFit: "cover" }}
//                       />
//                       <h4 className="fs-6 mt-3 fw-normal category-title">
//                         {item.categoryName}
//                       </h4>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Category;

import { useState, useEffect } from "react";
import axios from "axios";
import Swiper from "swiper";
import { Navigation } from "swiper/modules"; // Import Navigation from 'swiper/modules'
import "swiper/css";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Category() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/categories")
      .then((response) => {
        console.log("API Response:", response.data);
        setItems(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    if (items.length > 0) {
      new Swiper(".category-carousel", {
        modules: [Navigation],
        slidesPerView: 6,
        spaceBetween: 20,
        navigation: {
          nextEl: ".category-carousel-next",
          prevEl: ".category-carousel-prev",
        },
        loop: true,
      });
    }
  }, [items]);

  // Function to handle category click
  const handleCategoryClick = (categoryName) => {
    navigate(`/products/${categoryName}`); // Navigate to DisplayProducts page with category name
  };

  // Function to handle "View All" click
  const handleViewAllClick = () => {
    navigate("/products/all"); // Navigate to DisplayProducts page to show all products
  };

  return (
    <section className="py-5 overflow-hidden">
      <div className="container-lg">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header d-flex flex-wrap justify-content-between mb-5">
              <h2 className="section-title">Category</h2>
              <div className="d-flex align-items-center">
                {/* Update the "View All" button to use handleViewAllClick */}
                <button
                  className="btn btn-primary me-2"
                  onClick={handleViewAllClick}
                >
                  View All
                </button>
                <div className="swiper-buttons">
                  <button className="swiper-prev category-carousel-prev btn btn-yellow">
                    ❮
                  </button>
                  <button className="swiper-next category-carousel-next btn btn-yellow">
                    ❯
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="category-carousel swiper">
              <div className="swiper-wrapper">
                {items.map((item, index) => (
                  <div key={item.categoryName || index} className="swiper-slide text-center">
                    {/* Add onClick to handle category click */}
                    <div
                      className="nav-link"
                      onClick={() => handleCategoryClick(item.categoryName)}
                      style={{ cursor: "pointer" }} // Make it look clickable
                    >
                      <img
                        src={item.categoryImage}
                        className="rounded-circle"
                        alt={item.categoryName}
                        style={{ width: "120px", height: "120px", objectFit: "cover" }}
                      />
                      <h4 className="fs-6 mt-3 fw-normal category-title">
                        {item.categoryName}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Category;