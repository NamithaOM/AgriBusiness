import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [category, setCategory] = useState('')
  const navigate = useNavigate();

  const RegisterForm = (e) => {
    e.preventDefault();
    navigate('/');
    let params = {
      username: username,
      email: email,
      category: category,
      password: password,
      status: 2
    };
    fetch('http://localhost:5000/register', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <>
      <form method='post' onSubmit={RegisterForm} style={{ marginLeft: '500px', marginTop: '70px', width: '500px', height: '400px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)', backgroundColor: '#d5bdaf' }}>
        <div data-mdb-input-init className="form-outline mb-4">
          <input type="text" name='username' id="form2Example1" className="form-control" onChange={(e) => setUsername(e.target.value)}/>
          <label className="form-label" for="form2Example1">Username</label>
        </div>
        <div data-mdb-input-init className="form-outline mb-4">
  <label className="form-label" htmlFor="gender">Category</label>
  &nbsp;   &nbsp;  &nbsp;   &nbsp;  &nbsp;  &nbsp;
  <div className="form-check form-check-inline">
    <input className="form-check-input" type="radio" name="category" id="farmerCategory" value="farmer" onChange={(e) => setCategory(e.target.value)} />
    <label className="form-check-label" htmlFor="farmerCategory">Farmer</label>
  </div>
  <div className="form-check form-check-inline">
    <input className="form-check-input" type="radio" name="category" id="publicCategory" value="public" onChange={(e) => setCategory(e.target.value)} />
    <label className="form-check-label" htmlFor="publicCategory">Public</label>
  </div>
</div>

<div data-mdb-input-init className="form-outline mb-4">
          <input type="email" name='email' id="form2Example1" className="form-control" onChange={(e) => setEmail(e.target.value)}/>
          <label className="form-label" for="form2Example1">Email</label>
        </div>


        <div data-mdb-input-init className="form-outline mb-4">
          <input type="password" name='password' id="form2Example1" className="form-control" onChange={(e) => setPassword(e.target.value)}/>
          <label className="form-label" for="form2Example1">Password</label>
        </div>

        <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">Sign in</button>


        <div className="text-center">
          <Link to="/"> <p>Already a member? Login</p></Link>

        </div>
      </form>
    </>
  )
}

export default Register