import React from 'react';
import './navbar.css'; 
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../config/firebase";
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const Navbar = () => {

    const [user] = useAuthState(auth);

    const signUserOut = async () => {
        await signOut(auth);
    }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">Logo</a>
      </div>
      <div className="navbar-links">
        {!user ? ( <Link to="/login" className="navbar-link"> Login </Link> ) : <p>Hello</p>}
      </div>

      {user && (
        <div className="user-info">
          <p className="user-name">{user.displayName}</p>
          <img src={user.photoURL} className="user-avatar" alt="User Avatar" />
          <button className="user-logout-button" onClick={signUserOut}>
            Log Out
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
