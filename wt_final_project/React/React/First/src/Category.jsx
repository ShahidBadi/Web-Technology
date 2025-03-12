import { useState, useEffect } from "react";
import axios from "axios";
import Swiper from "swiper"; // Import SwiperJS
import "swiper/css";

function Category() {
  const [items, setItems] = useState([]); // ✅ Initialize as an empty array

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/categories")
      .then(response => {
        console.log("API Response:", response.data); // Debugging step
        setItems(response.data);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);
  
  useEffect(() => {
    new Swiper(".category-carousel", {
      slidesPerView: 4, // Show 4 categories per row
      spaceBetween: 20,
      navigation: {
        nextEl: ".category-carousel-next",
        prevEl: ".category-carousel-prev",
      },
      loop: false, // Set true if you want infinite loop
    });
  }, []);

  return (
    // <>
    //   <section className="py-5 overflow-hidden">
    //     <div className="container-lg">
    //       <div className="row">
    //         <div className="col-md-12">
    //           <div className="section-header d-flex flex-wrap justify-content-between mb-5">
    //             <h2 className="section-title">Category</h2>
    //             <div className="d-flex align-items-center">
    //               <a href="#" className="btn btn-primary me-2">View All</a>
    //               <div className="swiper-buttons">
    //                 <button className="swiper-prev category-carousel-prev btn btn-yellow">❮</button>
    //                 <button className="swiper-next category-carousel-next btn btn-yellow">❯</button>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="row">
    //         <div className="col-md-12">
    //           <div className="category-carousel swiper">
                
    //               {items.map((item, index) => (
    //                 <div className="swiper-wrapper">
    //                 <a key={item.categoryName || index} href="category.html" className="nav-link swiper-slide text-center">
    //                   <img src={item.categoryImage} className="rounded-circle" alt={item.categoryName} />
    //                   <h4 className="fs-6 mt-3 fw-normal category-title">{item.categoryName}</h4>
    //                 </a>
    //                 </div>                    
    //               ))}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </>
    <>
  <section className="py-5 overflow-hidden">
      <div className="container-lg">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header d-flex flex-wrap justify-content-between mb-5">
              <h2 className="section-title">Category</h2>
              <div className="d-flex align-items-center">
                <a href="#" className="btn btn-primary me-2">View All</a>
                <div className="swiper-buttons">
                  <button className="swiper-prev category-carousel-prev btn btn-yellow">❮</button>
                  <button className="swiper-next category-carousel-next btn btn-yellow">❯</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="category-carousel swiper">
              {/* ✅ Correct placement of .swiper-wrapper */}
              <div className="swiper-wrapper">
                {items.map((item, index) => (
                  <div key={item.categoryName || index} className="swiper-slide text-center">
                    <a href="category.html" className="nav-link">
                      <img 
                        src={item.categoryImage} 
                        className="rounded-circle" 
                        alt={item.categoryName} 
                        style={{ width: "120px", height: "120px", objectFit: "cover" }}
                      />
                      <h4 className="fs-6 mt-3 fw-normal category-title">{item.categoryName}</h4>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</>

  );
}

export default Category;
