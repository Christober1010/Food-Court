import React from "react";

function Login({ handleSignup }) {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <label className="form-label">Mobile number / Email ID</label>
          <input className="form-control" type="text" />
        </div>
        <div className="col-6 text-center mt-3">
          <button className="btn btn-primary w-100">REQUEST OTP</button>
        </div>
        <div className="col-6 mt-3">
          <button className="w-100 btn btn-success" onClick={() => handleSignup()}>
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
