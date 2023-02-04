import React from 'react';
import { IoIosBicycle } from "react-icons/io";
import { GoGrabber } from "react-icons/go";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './Header.css'
import CurrentUser from '../Hooks/CurrentUser';
import { getAuth, signOut } from 'firebase/auth';
import app from '../../firebase.in';
import userProfile from '../../images/user.png'

const Header = () => {

     const auth = getAuth(app)
     const navigate = useNavigate()

    const [user, setUser] = CurrentUser();
    let activeStyle = {
        textDecoration: "underline",
        color: "red"
    };

    let activeClassName = "underline";


    /// logout user 

    const logout = () => {
          signOut(auth)
          .then(()=> {
              navigate('/')
          })
          .catch(error=> {
              console.error(error.message)
          })
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div className='navbar-brand' style={{ fontSize: "50px" }}>
                        <Link style={{ color: "black" }} to="/"><IoIosBicycle /></Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <GoGrabber />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav mx-auto">
                            <li className='link'>
                                <NavLink
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    }
                                    to="/">Home</NavLink>
                            </li>
                            <li className='link'>
                                <NavLink
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    } to="/manage">Manage</NavLink>
                            </li>
                            <li className='link'>
                                <NavLink
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    } to="/blogs">Blogs</NavLink>
                            </li>
                            <li className='link'>
                                <NavLink
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    }
                                    to="/addBlog">Add Blog</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex">
                            {user && <p className='link'> <img style={{width:"20px"}} src={userProfile} alt="" />  {user.displayName}</p>}
                              {user ? "" : <Link to="/register"><button className="btn m-1 btn-sm btn-success">Register</button></Link>}
                              {user && <button onClick={logout} className="btn m-1 btn-sm btn-danger mr-2" >Logout</button> }
                              {user ? "" : <Link to="/login"><button className="btn m-1 btn-sm btn-danger mr-2" >Login</button></Link>}
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default Header;