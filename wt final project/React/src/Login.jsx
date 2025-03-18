import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

function Login() {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login & Signup
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    addresses: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        // Login API Call
        const response = await axios.post("http://localhost:5000/api/users/login", {
          email: formData.email,
          password: formData.password,
        });
        // Store token and userId in localStorage
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data._id); // Assuming the backend returns userId
        alert("Login Successful!");
        navigate("/"); // Redirect to home page
      } else {
        // Signup API Call
        const response = await axios.post("http://localhost:5000/api/users/register", formData);
        alert("Signup Successful! Please Login.");
        setIsLogin(true); // Switch to login mode
      }
    } catch (error) {
      alert("Something went wrong. Try again!");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
        <h2 className="text-center mb-3">{isLogin ? "Login" : "Signup"}</h2>
        <form onSubmit={handleSubmit}>
          {/* Display First Name and Last Name only for Signup */}
          {!isLogin && (
            <>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </>
          )}

          {/* Email field for both Login and Signup */}
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password field for both Login and Signup */}
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone and Address fields only for Signup */}
          {!isLogin && (
            <>
              <div className="input-group mb-3">
                <span className="input-group-text">+91</span>
                <input
                  type="tel"
                  pattern="[0-9]{10}"
                  className="form-control"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Address"
                    name="addresses"
                    value={formData.addresses}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <label htmlFor="floatingTextarea">Address</label>
                </div>
              </div>
            </>
          )}

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100">
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>

        {/* Toggle between Login and Signup */}
        <p className="text-center mt-3">
          <span
            className="text-primary"
            style={{ cursor: "pointer" }}
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Don't have an account? Signup" : "Already have an account? Login"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;