import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
    return (
        <div className='home'>
            <div className="something">
            <div className="homeInfo">

                {/* Home page text */}
            <h2>Learn More About Plants</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <Link to='register'><button>Sign Up</button></Link>
            </div>

            {/*Home page image */}
            <img src="https://www.mydomaine.com/thmb/yxeM6Tb74Jk8f1TZMAOS23u5G0k=/2121x1414/filters:fill(auto,1)/houseplant-propagation-supplies-651c987c3a8a4933aa9ff5724b17de9d.jpg" alt="Plants"/>
            </div>
        </div>
    )
}

export default Home
