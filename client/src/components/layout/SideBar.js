import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import './components/sidebar.css'

const SideBar = () => {
  return (
    <div className="sideCont">
      

      <div className="area"></div><nav className="main-menu">
            <ul className ='sideUl'>
              
                <li className="has-subnav">
                    <a href="#!">
                        <i className="fa fa-fire fa-2x"></i>
                        <span className="nav-text">
                            Hot
                        </span>
                    </a>
                    
                </li>
                <li className="has-subnav subnavMarg">
                    <a href="#!">
                       <i className="fa  fa-seedling fa-2x"></i>
                        <span className="nav-text">
                            Trending
                        </span>
                    </a>
                    
                </li>
                <li className="has-subnav">
                    <a href="#!">
                       <i className="fa  fa-map-marked-alt fa-2x"></i>
                        <span className="nav-text">
                        Discover
                        </span>
                    </a>
                 
                    <ul className ='sideUl2'>
                      <li>
                      <a href="#!" > <span className="nav-text"> Tunisia</span></a>
                      </li>
                    
                      <li>
                      <a href="#!" > <span className="nav-text"> Canada </span></a>
                      </li>
                    
                      <li>
                      <a href="#!" > <span className="nav-text"> India</span></a>
                      </li>
                    
                      
                    </ul>
                </li>
                <li>
                    <a href="#!">
                        <i className="fa  fa-tree fa-2x"></i>
                        <span className="nav-text">
                        Seasons
                        </span>
                    </a>
                    <ul className ='sideUl2'>
                      <li>
                      <a href="#!" > <span className="nav-text"> Summer</span></a>
                      </li>
                    
                      <li>
                      <a href="#!" > <span className="nav-text"> Fall </span></a>
                      </li>
                    
                      <li>
                      <a href="#!" > <span className="nav-text"> Winter</span></a>
                      </li>
                    
                      <li>
                      <a href="#!" > <span className="nav-text"> Spring</span></a>
                      </li>
                    </ul>
                    
                    
                    
                   
                </li>
                <li>
                    <a href="#!">
                        <i className="fa fa-dollar-sign fa-2x"></i>
                        <span className="nav-text">
                        Costs
                        </span>
                    </a>
                    <ul className ='sideUl2'>
                      <li>
                      <a href="#!" > <span> Over 5000$</span></a>
                      </li>
                    
                      <li>
                      <a href="#!" > <span> Over 1500$</span></a>
                      </li>
                    
                      <li>
                      <a href="#!" > <span> Under 1000$</span></a>
                      </li>
                    
                    </ul>
                    
                   
                </li>
                
                
                
            </ul>

            <ul className="logout">
                <li>
                   <a onClick={logout} href='#!!'>
                         <i className="fa fa-power-off fa-2x"></i>
                        <span className="nav-text">
                            Logout
                        </span>
                    </a>
                </li>  
            </ul>
        </nav>























    </div>
  )
}

SideBar.propTypes = {
  logout: PropTypes.func.isRequired,
}
const mapStateToProps = state =>({
  auth: state.auth
  });

export default connect(mapStateToProps, { logout })(SideBar);
