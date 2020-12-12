import axios from "axios";
import React, {useState} from "react";
import {useHistory} from 'react-router-dom'

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [login,setLogin] = useState({
    username:'',
    password:''
  })
  const [err,setErr] = useState('');

  const history = useHistory();

  const handleChange = (e) => {
    e.persist()
    setLogin({...login,[e.target.name]:e.target.value})
  }

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/login",login)
    .then(res => {
      console.log('ol: login: res:',res)
      localStorage.setItem(res.data.payload)
      history.push('/bubble-page')
    })
    .catch(err => {
      setErr(err.response)
    })
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleLogin}>
        <h3>Log-In to view Bubbles</h3>
        <input type="text" name="username" placeholder="username"
        value={login.username}
        onChange={handleChange}
        />
        <input type="text" name="password" placeholder="password"
        value={login.password}
        onChange={handleChange}
        />
        <button type="submit">Log-In</button>
      </form>
    </>
  );
};

export default Login;
