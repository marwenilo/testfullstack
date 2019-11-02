import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import  PropTypes from 'prop-types';
import { logout } from '../../actions/auth';


const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {

  const authLinks = (
    <div className='navbarRight'>
    <ul >
    <li className="nav-item active"><Link className="nav-link"  to="/profiles">
  
  Travelers
  
  </Link></li>
    <li className="nav-item "><Link className="nav-link" to="/posts">Posts</Link></li>
    <li className="nav-item "><Link  className="nav-link" to="/dashboard">Dashboard</Link></li>
    <li className="nav-item ">
      <Link className="nav-link" onClick={logout} href='#!'>
       
       logout</Link>
      </li>
  </ul>
  </div>
//     <div className='navbarRight'>
// <ul>
// <li className="nav-item " ><Link to="/profiles">
  
//    <span className="nav-link">Travelers</span>
  
//   </Link></li>

// hedhi tetbadel lel guestlinks
/* <li className="nav-item "><Link to="/posts">
  
   <span className="nav-link">Posts</span>
  
  </Link></li>

      
<li className="nav-item " ><Link to="/dashboard">
  
<i className="fas fa-user"></i>{' '}
<span className="nav-link">Dashboard</span>

</Link></li>
    <li className="nav-item ">
      <a onClick={logout} href='#!'>
        <i className="fas fa-sign-out-alt"></i>{' '}
        <span className="nav-link hide-sm">logout</span></a>
      </li>
  
  </ul>
  
  </div> */


  
  );
  const gestLinks  = (
    <div className='navbarRight'>
    <ul >
    <li className="nav-item active"><Link className="nav-link"  to="/profiles">
  
  Travelers
  
  </Link></li>
    <li className="nav-item "><Link className="nav-link" to="/register">Register</Link></li>
    <li className="nav-item "><Link  className="nav-link" to="/login">Login</Link></li>
  </ul>
  </div>
    );


  return (
    <Fragment className="navCont">
    <nav className="navbar navbar-dark">
    <h3 className="navbar-brand">
      <Link className="logos" to="/">Travel Like Nomade</Link>
    </h3>
      { !loading && (<Fragment> {isAuthenticated ? authLinks : gestLinks }  
        </Fragment>)}
    
  </nav>
  </Fragment>
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
