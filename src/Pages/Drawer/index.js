import React from "react";
import "./Drawer.css";

import { NavLink } from "react-router-dom";

const Drawer = (props) => {

    return (
        <div className={"SideDrawer " + (props.open ? 'Open' : 'Close')}>
        <div onClick={props.closed}>
            <i className="fa fa-bars side__hamburger" onClick={props.opened}></i>
        </div>

        <div className="side__tabs">
            <div className="side__tab " >
            <NavLink onClick={props.closed} exact activeClassName="mobile__active" style={{ textDecoration: 'none', color: '#2f1728' }} to='/'>HOME</NavLink>
            </div>
            <div className="side__tab">
            <NavLink onClick={props.closed} exact activeClassName="mobile__active" style={{ textDecoration: 'none', color: '#2f1728' }} to='/events'>EVENTS</NavLink>
            </div>
            <div className="side__tab">
            <NavLink onClick={props.closed} exact activeClassName="mobile__active" style={{ textDecoration: 'none', color: '#2f1728' }} to='/members'>MEMBERS</NavLink>
            </div>
            <div className="side__tab">
            <a onClick={props.closed} activeClassName="mobile__active" style={{ textDecoration: 'none', color: '#2f1728' }} href="https://kreiva.tk/media/brochure.pdf">BROCHURE</a>
            </div>
        </div>

        <div className="side__handles">
            <div>
                <a href="https://www.facebook.com/iiitvlitclub/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook-square"></i></a>
            </div>
            <div>
                <a href="https://www.instagram.com/alfaaz_iiitv/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
            </div>
            <div>
                <a href="https://www.facebook.com/iiitvlitclub/" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
            </div>
        </div>

    </div>

);
};

export default Drawer;
