import React, { Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileItem from './profileItem';
import { getProfiles } from '../../actions/profile';
import './profiles.css';

const Profiles = ({ getProfiles, profile: { profiles, loading }}) => {
    useEffect(()=>{
      getProfiles();
    }, [getProfiles])
  return (
    <div>
      { loading ? <Spinner /> : <div>
        
        <p className="profileTitle">
          <i className="fab fa-connectdevelop"></i> Browse and connect with Travelers
        </p>
        <div className="profiles">
          {profiles.length > 0 ? (
            profiles.map(profile => (
              <ProfileItem key={profile._id} profile={profile} />
            ))
          ) : <h4>No Profiles Found ....</h4> }
        </div>
      </div>}
    </div>
  )
}

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state =>({
profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(Profiles);