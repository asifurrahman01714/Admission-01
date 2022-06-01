import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App'

export default function Login() {
  const [loggedInUser, setLoggedInUser]= useContext(UserContext);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const handleCLick = ()=>{
    setLoggedInUser({
      name:"Asif Ur Rahman"
    });
    history.replace(from);
  };
  return (
    <div>
      <div>Login</div>
      <button onClick={handleCLick}>Click</button>
    </div>
  )
}
