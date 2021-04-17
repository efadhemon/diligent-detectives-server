import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import AvatarFace from '../../../images/Avatar face.png'
const Navbar = () => {
    
    const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser')) || {} ;

    const showUserInfo = () => {

        const userInfo = document.getElementById('loggedIn-user-info');

        if (userInfo.classList) { 
            userInfo.classList.toggle("display-none");
          } else {
            var classes = userInfo.className.split(" ");
            var i = classes.indexOf("display-none");
        
            if (i >= 0) 
              classes.splice(i, 1);
            else 
              classes.push("display-none");
              userInfo.className = classes.join(" "); 
          }
    }

    const signOut = () => {
        sessionStorage.removeItem('loggedInUser')
        sessionStorage.removeItem('admin')
        document.getElementById('loggedIn-user-info').style.display = 'none';
        window.location.reload();
    }

    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <Link className="navbar-brand brand-logo" to="/">Diligent Detectives</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/user/book">User Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin/client-list">Admin</Link>
                            </li>
                            <li className="nav-item">
                                {
                                    loggedInUser.email ?
                                        <img onClick={showUserInfo} className="nav-link user-avatar" src={loggedInUser.photo ? loggedInUser.photo : AvatarFace} alt="Avatar" />
                                        :
                                        <Link className="nav-link login-btn " to="/login">Login</Link>
                                }
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

            <div id="loggedIn-user-info" className="loggedIn-user-info display-none">
                <img src={loggedInUser.photo ? loggedInUser.photo : AvatarFace} alt="" />
                <h3>{loggedInUser.name}</h3>
                <p>{loggedInUser.email}</p>
                <button className="btn-brand" onClick={signOut}>Log Out</button>
            </div>
        </div>
    );
};

export default Navbar;
