import React from 'react'
import { fetchUser } from '../utils';

const Conditional = () => {
    const user = fetchUser();
    // console.log(user)
    
    // console.log(Math.floor(Math.random()*3))
    return (
        <>
             <nav className="navbar">
          <Logo />
           {/* Write your code : 
            - if the user is not logged in : render a button that says "login"
  
            - if the user is logged in :
              render a button that says logout and
                - if the user has a username : render a greeting message with the username "Welcome username !"
                - if the user does not have a user name : render "Logged and Please complete your username!""
  
          */}
          {user.isLoggedIn === true ? <button>Logout</button> : <button>Login</button> }
        </nav>
        <div>
          {user.isLoggedIn === true && user.username ? <p>Welcome {user.username} </p> : null}
          {user.isLoggedIn === true && !user.username ? <p>Logged and Please complete your username!</p> : null}
        </div>
        </>    
    );
}

export default Conditional