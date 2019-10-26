import React, { Fragment, useState} from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';


// import axios from 'axios';

const Register = ({setAlert, register, isAuthenticated }) => {

  const[formData, setFormData] = useState({
    name:'',
    email:'',
    password:'',
    password2:''
  });

  const { name, email, password, password2 } = formData;
  const onChange  = e => setFormData({ ...formData, [e.target.name]: e.target.value});
  const onSubmit = async e => {
    e.preventDefault();
    if(password !== password2) {
      setAlert('password do not match', 'danger');
    }else{
register({ name, email, password });



      // thiscode gonne be used in redux not in the componet
      // const newUser ={
      //   name, 
      //   email,
      //   password
      // }

      // try {
      //   const config = {
      //     headers: {
      //       'Content-Type': 'application/json'
      //     }
      //   }
      //   const body= JSON.stringify(newUser);

      //   const res = await axios.post('/api/users', body, config);
      //   console.log(res.data) 
      // } catch (err) {
      //   console.error(err.response.data);
        
      // }
      }
  };

   // redirect if registred
   if (isAuthenticated){
    return <Redirect to="/login" />;
  };
  return (
    <Fragment>
       <h1 className="large text-primary">Sign Up</h1>
      <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
      <form className="form" onSubmit={e =>onSubmit(e)}>
        <div className="form-group">
          <input type="text" placeholder="Name" 
          name="name" 
          value={name} 
          onChange={e => onChange(e)}
          required />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email Address" name="email"
           value={email} 
           onChange={e => onChange(e)}
           required  />
          <small className="form-text"
            >This site uses Gravatar so if you want a profile image, use a
            Gravatar email</small>
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
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2} 
           onChange={e => onChange(e)}
           required 
            minLength="6"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </Fragment>
  );
};

Register.prototype = {
setAlert: PropTypes.func.isRequired,
register: PropTypes.func.isRequired,
isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);
