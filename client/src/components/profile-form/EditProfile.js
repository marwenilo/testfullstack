import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';
const EditProfile = ({ profile:{ profile, loading }, createProfile, getCurrentProfile, history }) => {
  const [ formData, setFormData] = useState({
    // company: '',
    location: '',
    status: '',
    Countries: '',
    bio: '',
    facebook: '',
    youtube: '',
    instagram: ''
  });
  const [displaySocialInputs, toggleSocialInputs ] = useState(false);
  useEffect(() => {
    getCurrentProfile();

    setFormData({
      // company: loading || !profile.company ? '' : profile.company,
      location: loading || !profile.location ? '' : profile.location,
      status: loading || !profile.status ? '' : profile.status,
      countries: loading || !profile.countries ? '' : profile.countries.join(','),
      bio: loading || !profile.bio ? '' : profile.bio,
      facebook: loading || !profile.social ? '' : profile.social.facebook,
      youtube: loading || !profile.social ? '' : profile.social.youtube,
      instagram: loading || !profile.social ? '' : profile.social.instagram,
    });
  }, [loading, getCurrentProfile]);
  const {
    // company,
    location,
    status,
    countries,
    bio,
    facebook,
    youtube,
    instagram
  } = formData;

const onChange = e => setFormData ({ ...formData, [e.target.name]: e.target.value});

const onSubmit = e => {
  e.preventDefault();
  createProfile(formData, history, true)
};

  return (
    <Fragment>
      <h1 className="large text-primary">
        Create Your Profile
      </h1>
      <p className="lead">
        <i className="fas fa-user"></i> Let's get some information to make your
        profile stand out
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <select name="status" value={status} onChange={e =>onChange(e)}>
            <option value="0">* Select Professional Status</option>
            <option value="Developer">Developer</option>
            <option value="Junior Developer">Junior Developer</option>
            <option value="Senior Developer">Senior Developer</option>
            <option value="Manager">Manager</option>
            <option value="Student or Learning">Student or Learning</option>
            <option value="Instructor">Instructor or Teacher</option>
            <option value="Intern">Intern</option>
            <option value="Other">Other</option>
          </select>
          <small className="form-text"
            >Give us an idea of where you are at in your career</small
          >
        </div>
        {/* <div className="form-group">
          <input type="text" placeholder="Company" name="company" value={company} onChange={e=> onChange(e)} />
          <small className="form-text"
            >Could be your own company or one you work for</small
          >
        </div> */}
        
        <div className="form-group">
          <input type="text" placeholder="Location" name="location" value={location} onChange={e=> onChange(e)}/>
          <small className="form-text"
            >City & state suggested (eg. Boston, MA)</small
          >
        </div>
        <div className="form-group">
          <input type="text" placeholder="* Visited Countries" name="countries" value={countries} onChange={e=> onChange(e)}/>
          <small className="form-text"
            >Please use comma separated values (eg.
            Turkey,Spain,France)</small>
        </div>
        
        <div className="form-group">
          <textarea placeholder="A short bio of yourself" name="bio" value={bio} onChange={e=> onChange(e)}></textarea>
          <small className="form-text">Tell us a little about yourself</small>
        </div>
​
        <div className="my-2">
          <button onClick={() => toggleSocialInputs(!displaySocialInputs)} type="button" className="btn btn-light">
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>
          {displaySocialInputs && <Fragment>
​
           
​
        <div className="form-group social-input">
          <i className="fab fa-facebook fa-2x"></i>
          <input type="text" placeholder="Facebook URL" name="facebook" value={facebook} onChange={e=> onChange(e)} />
        </div>
​
        <div className="form-group social-input">
          <i className="fab fa-youtube fa-2x"></i>
          <input type="text" placeholder="YouTube URL" name="youtube" value={youtube} onChange={e=> onChange(e)} />
        </div>
​
     
​
        <div className="form-group social-input">
          <i className="fab fa-instagram fa-2x"></i>
          <input type="text" placeholder="Instagram URL" name="instagram" value={instagram} onChange={e=> onChange(e)} />
        </div> 
          </Fragment> }
        
        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">Go Back</Link>
      </form>
    </Fragment>
  )
}

EditProfile.propTypes = {
 createProfile: PropTypes.func.isRequired,
 getCurrentProfile: PropTypes.func.isRequired,
 profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
profile: state.profile
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(withRouter(EditProfile))