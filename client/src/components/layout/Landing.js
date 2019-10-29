import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import  PropTypes from 'prop-types';


// changes
import Footer from './components/Footer'
import ImageSlider from './components/ImageSlider'
import IconButton from '@material-ui/core/IconButton';
import PublicIcon from '@material-ui/icons/Public';
import ShareIcon from '@material-ui/icons/Share';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';

import Fab from '@material-ui/core/Fab';
import {travel} from '../layout/DataImg'
// import './Home.css';
















const Landing = ({ isAuthenticated }) => {
  if(isAuthenticated) {
   return <Redirect to='/dashboard' />
  }
  return (
    <section className="landing">
      {/* <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Developer Connector</h1>
          <p className="lead">
            Create a developer profile/portfolio, share posts and get help from
            other developers
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">Sign Up</Link>
            <Link to="/login" className="btn btn-light">Login</Link>
          </div>
        </div>
      </div> */}



<div>
    
     <ImageSlider />
      <p className="title2">What makes us different </p>

      <div className="bodySlider"> 
      <div>
      <IconButton style={{ marginBottom:"50px"}}>
      <PublicIcon style ={{width:"60px", height:"60px", color: "#00281f"}}/>
      </IconButton>
      <p className="title3"> Discover the world </p>
          </div> 

      <div> 
      <IconButton style={{ marginBottom:"50px"}}>
      <ShareIcon style ={{width:"60px", height:"60px", color: "#00281f"}}/>
      </IconButton>
          <p className="title3"> Share a wealth of experience </p>
          </div> 
      <div>
      <IconButton style={{ marginBottom:"50px"}}>
      <FlightTakeoffIcon style ={{width:"60px", height:"60px", color: "#00281f"}}/>
      </IconButton>
          <p className="title3"> Nothing is easier than travelling </p>
          </div> 

          </div> 
          <section className="joinCommunity">
          <p className="title4"> Join Our Community </p>
          </section>
          <section className="discover">
          <p > Discover fresh experiences daily. Your discoveries could even be featured in our handpicked Editors’ Choice Gallery.</p>
          
          <Fab
          variant="extended"
         className="btnx"
          aria-label="add"
        >
         <Link to="/posts" >View community posts</Link>
        </Fab>
          </section >
          <section className="travelImages">
        {travel.map(e=>(<img src={e.img} className="travelImg"/>))}
          </section>
          <div className="signup">
        <h2>Join our travel community today</h2>
        <p className="join" >We want fresh, creative talent like you. Join our global network of like-minded creators to be inspired by incredible experiences daily, and get rewarded for your talents</p>
       
        <Fab
          variant="extended"
         className="btny"
          aria-label="add"
        >
           <Link to="/register" >sign Up</Link>
         
        </Fab>
        
          </div>
<Footer/>
    </div>




    </section>
  )
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state =>({
isAuthenticated : state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
