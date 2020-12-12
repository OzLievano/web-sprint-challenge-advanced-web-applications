import React, {useState} from "react";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [log,setLog] = useState({
    username:'',
    password:''
  })
  const [err,setErr] = useState('');

  const handleChange = (e) => {
    e.persist()
    setLog({...log,[e.target.name]:e.target.value})
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form>
        <h3>Log-In to view Bubbles</h3>
        <input type="text" name="username" placeholder="username"
        value={log.username}
        />
        <input type="text" name="password" placeholder="password"
        value={log.password}
        />
        <button type="submit">Log-In</button>
      </form>
    </>
  );
};

export default Login;
