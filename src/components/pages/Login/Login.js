import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import logo from './Logo_white.png';
import './Login.css';
import {Link} from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      <img src={logo} width="425" height="" alt="" loading="lazy"></img>

    <div className="Login">
        <h1 style={{fontWeight:"bold"}}>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label style={{color: "white", fontWeight
        :"bold", fontSize:"18px"}}>Email</Form.Label>
          <Form.Control style={{borderRadius: "10px 10px 10px"}}
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label style={{color: "white", fontWeight
        :"bold", marginTop:"5%", fontSize:"18px"}}>Password</Form.Label>
          <Form.Control
          style={{borderRadius: "10px 10px 10px"}}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <div>
        <button className="ButtonLogin" block size="lg" type="submit" disabled={!validateForm()} style={{backgroundColor: "#13C803", justifyContent:"center", marginLeft:"32%"}}>
        <Link to="/main"><a>Login</a></Link>
        </button>
        <div className="text">
        <a style={{display:"block",height: "30px", marginTop:"1px", marginLeft:"19%", color:"white", fontWeight: "bold", fontFamily:"sans-serif"}}><Link to="/main"><a>Forgot password?</a></Link></a>
        </div>
        </div>
      </Form>
    </div>
    </div>
  );
}