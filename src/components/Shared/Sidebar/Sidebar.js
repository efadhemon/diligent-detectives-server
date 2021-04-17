import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faCartPlus, faBook, faCommentAlt, faPlus, faUser, faThLarge } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {

    const { pathname } = useLocation();
    const mainPath = pathname.split('/')[1];

    const signOut = () => {
        sessionStorage.removeItem('loggedInUser')
        sessionStorage.removeItem('admin')
        window.location.reload();
    }

    return (
        <div className="sidebar h-100 d-flex flex-column justify-content-between py-5 px-4">
            <ul className="list-unstyled">
                {mainPath === 'user' &&
                    <>
                        <li>
                            <Link to="/" className="text-white side-bar-link">
                                <h3>Diligent Detectives</h3>
                            </Link>
                        </li>
                        <li>
                            <Link to="/user/book" className="text-white side-bar-link">
                                <FontAwesomeIcon icon={faCartPlus} /> <span>Book</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/user/booking-list" className="text-white side-bar-link">
                                <FontAwesomeIcon icon={faBook} /> <span>Booking List</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/user/review" className="text-white side-bar-link">
                                <FontAwesomeIcon icon={faCommentAlt} /> <span>Review</span>
                            </Link>
                        </li>
                    </>
                }

                {
                    mainPath === 'admin' &&
                    <>
                        <li>
                            <Link to="/" className="text-white side-bar-link">
                                <h3>Diligent Detectives</h3>
                            </Link>
                        </li>

                        <li>
                            <Link to="/admin/client-list" className="text-white side-bar-link">
                                <FontAwesomeIcon icon={faBook} /> <span>Client List</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/add-service" className="text-white side-bar-link">
                                <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/make-admin" className="text-white side-bar-link">
                                <FontAwesomeIcon icon={faUser} /> <span>Make Admin</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/manage-service" className="text-white side-bar-link">
                                <FontAwesomeIcon icon={faThLarge} /> <span>Manage Service</span>
                            </Link>
                        </li>
                    </>
                }
            </ul>

            <div>
                <Link to="/" onClick={signOut} className="text-white side-bar-link"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;