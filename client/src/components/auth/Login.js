import React, { Fragment, useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import './login.css';
// import axios from 'axios';

const Login = ({ login, isAuthenticated }) => {

  const[formData, setFormData] = useState({
   
    email:'',
    password:''
    
  });

  const { email, password} = formData;
  const onChange  = e => setFormData({ ...formData, [e.target.name]: e.target.value});
  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
      
  };

  // redirect if logged in
  if (isAuthenticated){
    return <Redirect to="/dashboard" />;
  };
  return (
    <Fragment>
       {/* <h1 className="large text-primary">Sign In</h1>
      <p className="lead"><i className="fas fa-user"></i> Sign Into Your Account</p>
      <form className="form" onSubmit={e =>onSubmit(e)}>
        <div className="form-group">
          <input type="email" placeholder="Email Address" name="email"
           value={email} 
           onChange={e => onChange(e)}
           required  />
        
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password} 
            onChange={e => onChange(e)}
             required 
            minLength="6"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p> */}

<div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">

{/* <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins"> */}
        <div className="wrapper wrapper--w780">
            <div className="e z">
            {/* <div className="e"> */}
                <div className="t"></div>
                <div className="a"></div>
                <div className="card-body">
                    <div className="centerBtn"> <h2 className="title myP">Registration Info</h2> </div>
                    
                    <form className="form" onSubmit={e =>onSubmit(e)}>
                        
                        
                        
                        <div className="input-group">
                            <input className="input--style-3" type="email" placeholder="Email" name="email"
                            value={email} 
                            onChange={e => onChange(e)}
                            required 
                            />
                        </div>
                        <div className="input-group">
                            <div className="rs-select2 js-select-simple select--no-search">
                                
                            </div>
                        </div>
                        <div className="input-group">
                            <input className="input--style-3" type="password"
                            placeholder="Password"
                            name="password"
                            value={password} 
                            onChange={e => onChange(e)}
                             required 
                            minLength="6"
                            />
                        </div>
                        <div className="input-group">
                            <div className="rs-select2 js-select-simple select--no-search">
                                
                            </div>
                        </div>
                        
                        <div className="p-t-10 centerBtn">
                            <button className="btn btn--pill btn--green" type="submit"
                            value="Login"
                            >Submit</button>
                        </div>
                    </form>
                    <p className="my-1 myP">
                    Don't have an account?
                            <Link to="/register">Sign Up In</Link>
                         </p>
                </div>
            </div>
        </div>
    {/* </div> */}


    </div>






    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
