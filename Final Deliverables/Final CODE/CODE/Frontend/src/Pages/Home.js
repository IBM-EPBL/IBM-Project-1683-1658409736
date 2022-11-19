import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
  <div className="w3-top">
  <div className="w3-bar w3-red w3-card w3-left-align w3-large">
    <a className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-red" href="javascript:void(0);" onclick="myFunction()" title="Toggle Navigation Menu"><i className="fa fa-bars"></i></a>
    <a href="#" className="w3-bar-item w3-button w3-padding-large w3-white">Home</a>
   <Link to={'/about'}><p style={{color:"white"}} className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">About</p></Link> 
   <Link to={'/report'}><p style={{color:"white"}} className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Report</p></Link>
   <Link to={'/dash'}><p style={{color:"white"}} className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Dashboard</p></Link>
   <Link to={'/story'}><p style={{color:"white"}} className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Story</p></Link>
   <Link to={'/contact'}><p style={{color:"white"}} className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Contact</p></Link>
  </div>
  <div class="w3-container w3-red w3-center" style={{padding:"128px 16px"}}>
  <h1 class="w3-margin w3-jumbo">Global Sales Data Analytics</h1>
  <p class="w3-xlarge w3-white">Find out Best Solutions for more Productivity</p>
  <Link to={'/start'}><button style={{fontWeight:"bold"}} class="w3-button w3-green w3-padding-large w3-large w3-margin-top w3-hover-white">Get Started</button></Link>
  <div class="w3-container w3-padding-64 w3-center w3-opacity">  
  <div class="w3-xlarge w3-padding-32">
    <i class="fa fa-facebook-official w3-hover-opacity"></i>&nbsp;&nbsp;
    <i class="fa fa-instagram w3-hover-opacity"></i>&nbsp;&nbsp;
    <i class="fa fa-snapchat w3-hover-opacity"></i>&nbsp;&nbsp;
    <i class="fa fa-pinterest-p w3-hover-opacity"></i>&nbsp;&nbsp;
    <i class="fa fa-twitter w3-hover-opacity"></i>&nbsp;&nbsp;
    <i class="fa fa-linkedin w3-hover-opacity"></i>
    <p>Powered by</p><span style={{fontWeight:"bold",color:"yellow",fontSize:"16px"}}> KMRK - Team Id: PNT2022TMID08890</span>
 </div>
</div>
</div>

    </div>
  );
}

export default Home