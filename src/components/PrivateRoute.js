import React from "react";
import { Route, Redirect } from "react-router-dom";

// If the user has a token render the links the are Private Routes
function PrivateRoute({component: Component, ...rest}) {
  return (<Route {...rest} render={()=> {
    if (localStorage.getItem('token')) {
      return(<Component/>)
      // If the user however does not have a token redirect to the login
    } else {
      return <Redirect to='/login'/>
    }
  }}/>);
}

export default PrivateRoute;