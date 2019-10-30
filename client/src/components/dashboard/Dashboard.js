import React, { useEffect, Fragment  } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import  { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import DashboardActions from './DashboardActions';
import './dash.css';

const Dashboard = ({ 
  getCurrentProfile, 
  deleteAccount,
  auth: { user }, 
  profile: { profile, loading }}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);
  return( loading && profile === null ? <Spinner /> : <div className="cont">

    <p className='leads'>
      <i className='fas fa-user'></i> Welcome { user && user.name}
    </p>
    {profile !== null ? 
  <Fragment>
    <DashboardActions />
    <div className="my-2 ">
      <button className="btn btndel btn-danger" onClick={() => deleteAccount()}>
      <i className="fas fa-user-minus"></i> Delete My Account
      </button> 
 
       </div>
  </Fragment> :   <Fragment>
    <p className='leads'>You have not setup profile, Please add some info</p>
    <Link to='/create-profile' className="btn btndel btn-primary my-1">
        create profile

    </Link>
    </Fragment>
  }
    
  </div>
    
  );
  
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
}; 

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, {getCurrentProfile, deleteAccount})(Dashboard);
