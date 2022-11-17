import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import "./Nav.css"

function Nav () {
    const [show, handleShow] = useState(false);
    const history = useNavigate()

    const transitionNavBar = () =>{
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false)
        }
}

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar)
    }, [])

    return <div className={`nav ${show && 'nav__black'}`}>
        <div className="nav__contents">
        <img 
        onClick={() => history('/')}
        className="nav__logo"
        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="logo-netflix" />

        <img 
        onClick={() => history("/profile")}
        className="nav__avatar"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeVNxpxSBe-RA0h6yaML3_VrTWa_FYaEKxQ2RjWYjske1QPixHcISzO69xN0ayXiApeCk&usqp=CAU" alt="avatar" />
        </div>
    </div>

}

export default Nav;