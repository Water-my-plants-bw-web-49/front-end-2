import React,{useEffect}  from "react";
import { useHistory } from 'react-router-dom';

const Logout = (props)=> {
    // Sets push as useHistory
    const {push} = useHistory()
    // This is a mount for apis is what I remember about useEffect
    useEffect(() =>{
        // Grabs the token from localStorage and deletes it and the user has to logged in once more to access private routes.
        const token = localStorage.getItem("token")
        localStorage.removeItem('token')
        push('./login')
        // Refreshes the page, so the login will show again.
        window.location.reload()
    }, [])
    
    return(<div></div>);
}

export default Logout;