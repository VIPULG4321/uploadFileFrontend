import React, { useState } from "react";
import { Link } from "react-router-dom";

const signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value)
    console.log(email)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  console.log(email, password);

  return (
    <div className="w-100" style={{ marginTop: "120px" }}>
      <div className="container mx-800">
        <div className="col-md-12 border p-0 login-main">
          <div className="row">

          <div className="col-md-6 ps-0 pe-0">
              <div className="px-5 py-4">
                <h2>Register Now</h2>
                <form>
                  <div className="form-group">
                    {/* <label for="email">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/> */}
                  
                    <label className="mt-2">User Name</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      onChange={(e) => handleEmail(e)}
                    />
                  
                    <label className="mt-2">Email Address</label>
                    <input
                      type="text"
                      placeholder="Enter your email"
                      onChange={(e) => handleEmail(e)}
                    />
                    <label htmlFor="password">Password</label>
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      placeholder="Enter your password"
                      onChange={(e) => handlePassword(e)}
                      style={{
                        width: "100%",
                        padding: "8px",
                        marginBottom: "10px",
                      }}
                    />
                    <div style={{ textAlign: "left"}}>
                      <input type="checkbox" className="show-pwd"
                        id="showPassword"
                        onChange={togglePasswordVisibility}/>
                      <label
                        htmlFor="showPassword"
                        style={{ marginLeft: "5px" }}
                      >
                        Show Password
                      </label>
                    </div>
                  </div>

                  <div className="w-100 d-flex justify-content-center mt-3 form-btn">
                    <button type="submit" className="bg-dark text-light px-4 py-1 rounded">
                      Submit
                    </button>
                  </div>
                  {/* <Link to="/forgetpwd">
                    <h6 className="text-center mt-2">Forgot Password?</h6>
                  </Link> */}
                </form>
              </div>
            </div>
            <div className="col-md-6 pe-0 ps-0 part1 d-none d-md-block" style={{ backgroundColor: "#000" }}>
              <div className="d-flex flex-column justify-content-center align-items-center px-4 h-100">
                <h1 className="text-center text-light">Start Organizing!</h1>
                <p className="text-center text-light mt-2 px-4">
                Sign up to upload, store, and organize your files securely.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default signup;