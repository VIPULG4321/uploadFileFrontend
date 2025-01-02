import React,{useState} from 'react'

const ForgetPwd = () => {
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
    <div className="w-100" style={{ marginTop: "80px" }}>
      <div className="container mx-800">
        <div className="col-md-12 border p-0 login-main">
          <div className="row">

            <div className="col-md-6 pe-0 ps-0 part1 d-none d-md-block" style={{ backgroundColor: "#000" }}>
              <div className="d-flex flex-column justify-content-center align-items-center px-4 h-100">
                <h1 className="text-center text-light">Reset Your Access</h1>
                <p className="text-center text-light">
                  Enter your email to receive instructions for resetting your password and regain control of your files.
                </p>
              </div>
            </div>
            <div className="col-md-6 ps-0 pe-0">
              <div className="px-5 py-5">
                <h2>Email for Password Reset</h2>
                <form>
                  <div className="form-group">
                    {/* <label for="email">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/> */}
                  
                    <label className="mt-2">Email Address</label>
                    <input
                      type="text"
                      placeholder="Enter your email"
                      onChange={(e) => handleEmail(e)}
                    />
                    
                  </div>

                  <div className="w-100 d-flex justify-content-center mt-3 form-btn">
                    <button type="submit" className="bg-dark text-light px-4 py-1 rounded">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPwd;