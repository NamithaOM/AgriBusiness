import React, { useState } from "react";
import { useNavigate ,Link} from "react-router-dom";
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const loginForm = (e) => {
      e.preventDefault();
      let params = {
          username: email,
          userPassword: password
      };

      fetch('http://localhost:5000/login', {
          method: 'post',
          headers: {
              Accept: 'application/json',
              'Content-type': 'application/json'
          },
          body: JSON.stringify(params)
      })
      .then((res) => res.json())
      .then((userData) => {
          console.log(userData);
          if(userData !== 'invalid') {
              localStorage.setItem("userdata", JSON.stringify(userData));
              setTimeout(() => {
                  navigate('/');
                  window.location.reload();
              }, 1000);
          } else {
              console.log("not valid");
          }
          console.log(localStorage);
      });
  }
  return (
<>
<form method='post' onSubmit={loginForm} style={{marginLeft:'500px',marginTop:'70px', width: '500px', height: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px',  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)', backgroundColor: '#93C572'  }}>
  <div data-mdb-input-init className="form-outline mb-4">
    <input type="email" name='username' id="form2Example1" className="form-control" onChange={(e)=>setEmail(e.target.value)} />
    <label className="form-label" for="form2Example1">Email address</label>
  </div>


  <div data-mdb-input-init className="form-outline mb-4">
    <input type="password" name='userpassword' id="form2Example2" className="form-control"onChange={(e)=>setPassword(e.target.value)} />
    <label className="form-label" for="form2Example2">Password</label>
  </div>

  <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">Sign in</button>


  <div className="text-center">
   <Link to="/register"><p>Not a member?  Register</p></Link> 
  
  </div>
</form>
</>
  )
}

export default Login