import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import cart from "../public/images/cart.png";
import heartf from "../public/images/heartf.png";
import heartt from "../public/images/heartt.png";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

function PopularProduct() {
  const [product, setProducts] = useState([]);
  const [product2, setProducts2] = useState([]);
  const [quantities, setQuantities] = useState({}); // State for quantities
  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => {
        const sortedProducts = data.sort((a, b) => b.rating - a.rating);
        setProducts(sortedProducts);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts2(data.reverse());
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const toggleHeartIcon = () => {
    setIsHeartFilled((prev) => !prev);
  };

  const calculateOriginalPrice = (discountedPrice) => {
    return (discountedPrice / 0.8).toFixed(2);
  };

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
      [productId]: Math.max((prevQuantities[productId] || 0) - 1, 0),
    }));
  };

  // Handle add to cart
  const handleAddToCart = async (productId) => {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

    if (!userId || !token) {
      alert("Please log in to add products to the cart.");
      navigate("/login");
      return;
    }

    const quantity = quantities[productId] || 1;

    try {
      const response = await axios.post(
        "http://localhost:5000/api/cart/",
        {
          userId: userId,
          items: [
            {
              _id: productId,
              quantity: quantity,
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.message) {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error adding product to cart:", error);
      alert("Failed to add product to cart. Please try again.");
    }
  };

  return (
    <>
      <section className="pb-5">
        <div className="container-lg">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header d-flex flex-wrap justify-content-between my-4">
                <h2 className="section-title">Popular Products</h2>
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
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4">
                {product.slice(0, 5).map((product) => {
                  const originalPrice = calculateOriginalPrice(product.price);
                  const discount = 20;

                  return (
                    <div className="col" key={product._id}>
                      <div className="product-item card h-100">
                        <figure className="card-img-top">
                          <a href="#" title={product.name}>
                            <img
                              src={product.images}
                              alt={product.name}
                              className="img-fluid"
                            />
                          </a>
                        </figure>
                        <div className="card-body d-flex flex-column text-center">
                          <h3 className="fs-6 fw-normal card-title">{product.name}</h3>
                          <p className="fs-7 text-muted">{product.category}</p>
                          <div>
                            <span className="rating">
                              {[...Array(5)].map((_, i) => (
                                i < Math.floor(product.rating) ? (
                                  <FaStar key={i} className="text-warning" />
                                ) : i < product.rating ? (
                                  <FaStarHalfAlt key={i} className="text-warning" />
                                ) : (
                                  <FaStar key={i} className="text-secondary" />
                                )
                              ))}
                            </span>
                            <span>({Math.ceil(Math.random() * 150)})</span>
                          </div>
                          <div className="d-flex justify-content-center align-items-center gap-2">
                            <del>${originalPrice}</del>
                            <span className="text-dark fw-semibold">${product.price}</span>
                            <span className="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">
                              {discount}% OFF
                            </span>
                          </div>
                          <div className="button-area p-3 pt-0">
                            <div className="row g-2 align-items-center">
                              <div className="col-3">
                                <input
                                  type="number"
                                  name="quantity"
                                  className="form-control border-dark-subtle input-number quantity"
                                  value={quantities[product._id] || 1}
                                  min={1}
                                  max={product.stock}
                                  onChange={(e) =>
                                    setQuantities({
                                      ...quantities,
                                      [product._id]: parseInt(e.target.value),
                                    })
                                  }
                                />
                              </div>
                              <div className="col-9 d-flex gap-2 align-items-center">
                                <button
                                  className="btn btn-primary rounded-1 p-2 fs-7 btn-cart flex-grow-1"
                                  onClick={() => handleAddToCart(product._id)}
                                >
                                  <img src={cart} alt="Cart Icon" width={18} height={18} />
                                  Add to Cart
                                </button>
                                <button
                                  className="btn btn-outline-dark rounded-1 p-2 fs-6"
                                  onClick={toggleHeartIcon}
                                >
                                  <img
                                    src={isHeartFilled ? heartt : heartf}
                                    alt="Heart Icon"
                                    width={18}
                                    height={18}
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                          {product.stock === 0 && (
                            <p className="text-danger">Out of Stock</p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Just Arrived Section */}
      <section className="pb-5">
        <div className="container-lg">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header d-flex flex-wrap justify-content-between my-4">
                <h2 className="section-title">Just Arrived</h2>
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
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4">
                {product2.slice(0, 5).map((product) => {
                  const originalPrice = calculateOriginalPrice(product.price);
                  const discount = 20;

                  return (
                    <div className="col" key={product._id}>
                      <div className="product-item card h-100">
                        <figure className="card-img-top">
                          <a href="#" title={product.name}>
                            <img
                              src={product.images}
                              alt={product.name}
                              className="img-fluid"
                            />
                          </a>
                        </figure>
                        <div className="card-body d-flex flex-column text-center">
                          <h3 className="fs-6 fw-normal card-title">{product.name}</h3>
                          <p className="fs-7 text-muted">{product.category}</p>
                          <div>
                            <span className="rating">
                              {[...Array(5)].map((_, i) => (
                                i < Math.floor(product.rating) ? (
                                  <FaStar key={i} className="text-warning" />
                                ) : i < product.rating ? (
                                  <FaStarHalfAlt key={i} className="text-warning" />
                                ) : (
                                  <FaStar key={i} className="text-secondary" />
                                )
                              ))}
                            </span>
                            <span>({Math.ceil(Math.random() * 150)})</span>
                          </div>
                          <div className="d-flex justify-content-center align-items-center gap-2">
                            <del>${originalPrice}</del>
                            <span className="text-dark fw-semibold">${product.price}</span>
                            <span className="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">
                              {discount}% OFF
                            </span>
                          </div>
                          <div className="button-area p-3 pt-0">
                            <div className="row g-2 align-items-center">
                              <div className="col-3">
                                <input
                                  type="number"
                                  name="quantity"
                                  className="form-control border-dark-subtle input-number quantity"
                                  value={quantities[product._id] || 1}
                                  min={1}
                                  max={product.stock}
                                  onChange={(e) =>
                                    setQuantities({
                                      ...quantities,
                                      [product._id]: parseInt(e.target.value),
                                    })
                                  }
                                />
                              </div>
                              <div className="col-9 d-flex gap-2 align-items-center">
                                <button
                                  className="btn btn-primary rounded-1 p-2 fs-7 btn-cart flex-grow-1"
                                  onClick={() => handleAddToCart(product._id)}
                                >
                                  <img src={cart} alt="Cart Icon" width={18} height={18} />
                                  Add to Cart
                                </button>
                                <button
                                  className="btn btn-outline-dark rounded-1 p-2 fs-6"
                                  onClick={toggleHeartIcon}
                                >
                                  <img
                                    src={isHeartFilled ? heartt : heartf}
                                    alt="Heart Icon"
                                    width={18}
                                    height={18}
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                          {product.stock === 0 && (
                            <p className="text-danger">Out of Stock</p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PopularProduct;