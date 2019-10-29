import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import IconButton from '@material-ui/core/IconButton';
// import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
const Footer = () => {
    return (
        <div className="footer">
            <div className="footSection">
                <span className="titleSection" >Company</span>
                <span className="itemSection">Newsroom</span>
                <span className="itemSection">About us</span>
                <span className="itemSection">Carrers</span>
            </div>
            <div className="footSection">
                <span className="titleSection">Community</span>
                <span className="itemSection">Hot Posts</span>
                <span className="itemSection">Editors' choice</span>
                <span className="itemSection">Directory</span>
                <span className="itemSection">Quests</span>
                <span className="itemSection">Groups</span>

            </div>
            <div className="footSection">
            <span className="titleSection">Licensing</span>
                <span className="itemSection">About licensing</span>
                <span className="itemSection">Become a contributor</span>
                <span className="itemSection">contents types </span>
                <span className="itemSection">Distribution</span>
                <span className="itemSection">Groups</span>

            </div>
            <div className="footSection">
            <span className="titleSection">Social</span>
                <div className="socialsec">
                <IconButton >
      <FacebookIcon style ={{width:"40px", height:"40px", color: "#00281f"}}/>
      </IconButton>
                <span className="itemSection" style={{ marginLeft:"40px"}}>Facebook</span>
                </div>

              

                <div className="socialsec">
                    
                <IconButton >
      <InstagramIcon style ={{width:"40px", height:"40px", color: "#00281f" }}/>
      </IconButton>
                <span className="itemSection" style={{ marginLeft:"40px"}}>Instagram</span>
                </div>

            </div>

            

            

        </div>
    )
}

export default Footer
