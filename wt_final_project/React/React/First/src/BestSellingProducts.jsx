import { useState, useEffect } from "react";

function BestSellingProducts(){
    const [products, setProducts] = useState([]);

    useEffect(() => {
      // Fetch product data from API
      fetch("http://localhost:5000/api/products") // Replace with your actual API URL
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error("Error fetching data:", error));
    }, []);


    return(
        <>
          <section className="pb-5">
            <div className="container-lg">
              <div className="row">
                <div className="col-md-12">
                  <div className="section-header d-flex flex-wrap justify-content-between my-4">
                    <h2 className="section-title">Best selling products</h2>
                    <div className="d-flex align-items-center">
                      <a href="#" className="btn btn-primary rounded-1">
                        View All
                      </a>
                    </div>
                  </div>
                </div>
              </div>
               <div className="row">
                <div className="col-md-12">
                  <div className="product-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5">
                    {products.slice(0,8).map((product) => (
                      <div className="col" key={product.id}>
                        <div className="product-item">
                          <figure>
                            <a href="#" title={product.name}>
                              <img
                                src={product.images} // Dynamic image
                                alt={product.name}
                                className="tab-image"
                              />
                            </a>
                          </figure>
                          <div className="d-flex flex-column text-center">
                            <h3 className="fs-6 fw-normal">{product.name}</h3>
                            <p className="fs-7 text-muted">{product.category}</p>
                            <div>
                              <span className="rating">
                                {[...Array(5)].map((_, i) => (
                                  <svg key={i} width={18} height={18} className="text-warning">
                                    <use xlinkHref={i < product.rating ? "#star-full" : "#star-half"} />
                                  </svg>
                                ))}
                              </span>
                              <span>({product.reviews})</span>
                            </div>
                            <div className="d-flex justify-content-center align-items-center gap-2">
                              {product.discount > 0 && <del>${product.originalPrice}</del>}
                              <span className="text-dark fw-semibold">${product.price}</span>
                              {product.discount > 0 && (
                                <span className="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">
                                  {product.discount}% OFF
                                </span>
                              )}
                            </div>
                            <div className="button-area p-3 pt-0">
                              <div className="row g-1 mt-2">
                                <div className="col-3">
                                  <input
                                    type="number"
                                    name="quantity"
                                    className="form-control border-dark-subtle input-number quantity"
                                    defaultValue={1}
                                    min={1}
                                    max={product.stock} // Restrict max quantity to available stock
                                  />
                                </div>
                                <div className="col-7">
                                  <a href="#" className="btn btn-primary rounded-1 p-2 fs-7 btn-cart">
                                    <svg width={18} height={18}>
                                      <use xlinkHref="#cart" />
                                    </svg>{" "}
                                    Add to Cart
                                  </a>
                                </div>
                                <div className="col-2">
                                  <a href="#" className="btn btn-outline-dark rounded-1 p-2 fs-6">
                                    <svg width={18} height={18}>
                                      <use xlinkHref="#heart" />
                                    </svg>
                                  </a>
                                </div>
                              </div>
                            </div>
                            {product.stock === 0 && <p className="text-danger">Out of Stock</p>}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="py-3">
            <div className="container-lg">
              <div className="row">
                <div className="col-md-12">
                  <div className="banner-blocks">
                    <div
                      className="banner-ad d-flex align-items-center large bg-info block-1"
                      style={{
                        background: 'url("images/banner-ad-1.jpg") no-repeat',
                        backgroundSize: "cover"
                      }}
                    >
                      <div className="banner-content p-5">
                        <div className="content-wrapper text-light">
                          <h3 className="banner-title text-light">Items on SALE</h3>
                          <p>Discounts up to 30%</p>
                          <a href="#" className="btn-link text-white">
                            Shop Now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="banner-ad bg-success-subtle block-2"
                      style={{
                        background: 'url("images/banner-ad-2.jpg") no-repeat',
                        backgroundSize: "cover"
                      }}
                    >
                      <div className="banner-content align-items-center p-5">
                        <div className="content-wrapper text-light">
                          <h3 className="banner-title text-light">Combo offers</h3>
                          <p>Discounts up to 50%</p>
                          <a href="#" className="btn-link text-white">
                            Shop Now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="banner-ad bg-danger block-3"
                      style={{
                        background: 'url("images/banner-ad-3.jpg") no-repeat',
                        backgroundSize: "cover"
                      }}
                    >
                      <div className="banner-content align-items-center p-5">
                        <div className="content-wrapper text-light">
                          <h3 className="banner-title text-light">Discount Coupons</h3>
                          <p>Discounts up to 40%</p>
                          <a href="#" className="btn-link text-white">
                            Shop Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* / Banner Blocks */}
                </div>
              </div>
            </div>
          </section>
        </>

       
    )
}

export default BestSellingProducts