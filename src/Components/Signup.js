import React from "react";

function Signup({handleSignin}) {
  return (
    <div>
      <div className="row">
        <div className="col-6">
          <label className="form-label">First Name</label>
          <input className="form-control" type="text" />
        </div>
        <div className="col-6">
          <label className="form-label">Last Name</label>
          <input className="form-control" type="text" />
        </div>
        <div className="col-6">
          <label className="form-label">Mobile number / Email ID</label>
          <input className="form-control" type="text" />
        </div>
        <div className="col-6">
          <label className="form-label">Password</label>
          <input className="form-control" type="password" />
        </div>

        <div className="col-6 text-center mt-3">
          <button className="btn btn-primary w-100">REQUEST OTP</button>
        </div>
        <div className="col-6 mt-3">
          <button
            className="w-100 btn btn-success"
            onClick={() => handleSignin()}
          >
            LOG IN
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
