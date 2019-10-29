import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import  PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {

  const authLinks = (
<ul>
<li ><Link to="/profiles">
  
   <span className="nav-item">Developers</span>
  
  </Link></li>

{/* //hedhi tetbadel lel guestlinks */}
<li><Link to="/posts">
  
   <span className="nav-item">Posts</span>
  
  </Link></li>

      
<li ><Link to="/dashboard">
  
<i className="fas fa-user"></i>{' '}
<span className="nav-item" >Dashboard</span>

</Link></li>
    <li>
      <a onClick={logout} href='#!'>
        <i className="fas fa-sign-out-alt"></i>{' '}
        <span className="nav-item hide-sm">logout</span></a>
      </li>
  
  </ul>
  );
  const gestLinks  = (
    <ul >
    <li className="nav-item active"><Link className="nav-link"  to="/profiles">
  
  Developers
  
  </Link></li>
    <li className="nav-item "><Link className="nav-link" to="/register">Register</Link></li>
    <li className="nav-item "><Link  className="nav-link" to="/login">Login</Link></li>
  </ul>
    );


  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
    <h3 className="navbar-brand">
      <Link className="logos" to="/">Travel Like Nomade</Link>
    </h3>
      { !loading && (<Fragment> {isAuthenticated ? authLinks : gestLinks }  
        </Fragment>)}
    
  </nav>

  );
};

Navbar.propTpes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}
const mapStateToProps = state =>({
auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
