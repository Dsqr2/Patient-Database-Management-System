import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [aadhar, setAadhar] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");

  const [error, setError] = useState("");
  const navigate = useNavigate();
  console.log(aadhar,name,email,mobile,dob,gender,);

  const handleSubmit = async(e) => {

        e.preventDefault();

        const addUser = {aadhar,name,email,mobile,dob,gender,};

        const response = await fetch("http://localhost:5000", {
            method:"POST",
            body: JSON.stringify(addUser),
            headers: {
                "Content-Type": "application/json"
            },
        });

        const result = await response.json();

        if(!response.ok)
        {
            console.log(result.error);
            setError(result.error);
        }

        if(response.ok)
        {
            console.log(result);
            setError("");
            setAadhar("");
            setName("");
            setEmail("");
            setMobile("");
            setDob(0);
            setGender("");
            navigate("/read");
        }
  }

  return (
    <div className="container my-2">
        {error && <div className="alert alert-danger">{error}</div>}

      <h2 className="h1 text-center h1-custom">Enter the Patients Details</h2>
      <form className="form custom-form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Aadhar Number</label>
          <input
            type="text"
            className="form-control"
            value={aadhar} 
            maxLength="14"
            onChange={(e) => setAadhar(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name} 
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Mobile Number</label>
          <input
            type="text"
            className="form-control"
            value={mobile} 
            maxLength="10"
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Date of Birth</label>
          <input
            type="Date"
            className="form-control"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Gender</label>
            <select
              className="form-control"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
        </div>
        <button type="add" className="btn btn-primary">
          Add Patient
        </button>
      </form>
    </div>
  );
};

export default Create;