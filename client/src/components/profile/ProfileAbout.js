import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ProfileAbout = ({
  profile: {
    bio, 
    countries,
    user: { name }
  }
}) => {
  return (
    <div className="profileAbout">
      { bio && (
      <Fragment>
        <h2 className="aboutTitle">{name.trim().split('')[0]}'s Bio</h2>
          <p>
            {bio}
          </p>
          <div className="line"></div>
      </Fragment>
      )}      
          <h2 className="aboutTitle">Visited Countries</h2>
          <div className="skills">
          {countries.map((country, index) =>(
        <div key={index} className="p-1" >
          <i className="fa fa-check" style={{color:"#037367"}}></i> {country}
          </div>
      ))}
          </div>
        </div>
  )
}
 
ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired

}

export default ProfileAbout