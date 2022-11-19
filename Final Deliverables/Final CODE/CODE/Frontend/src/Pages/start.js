import React from 'react'
import './start1.css'

function start() {
  return (
    <div>
        <div class="w3-top">
  <div class="w3-bar w3-white w3-padding w3-card" style={{letterSpacing:"4px"}}>
    <a style={{color:"black",fontSize:"15px",fontWeight:"bolder"}} href="#home" class="w3-bar-item w3-button">Global Sales</a>
  </div>
  <div class="card bg-dark text-white">
  <img style={{opacity:"0.7"}} src="https://s3-prod.adage.com/s3fs-public/PP_20200714_datorama_iStock-504376094_3x2.jpg" />
  <div class="card-img-overlay">
    <h5 style={{color:"Red",fontSize:"30px"}} class="card-title">GLOBAL SALES DATA ANALYTICS</h5>
    <br/>
    <br/>
    <p style={{color:"black",fontSize:"20px",opacity:"0.9"}} class="card-text">Sales analytics refers to the technology and processes used to gather sales data and gauge sales performance. Sales leaders use these metrics to set goals, improve internal processes, and forecast future sales and revenue more accurately.

The goal of sales analytics is always to simplify the information available to you. It should help you clearly understand your team’s performance, sales trends, and opportunities.</p>
    <p style={{color:"blue",fontSize:"17px",opacity:"0.9"}} class="card-text">Sales analytics is your sales team’s hidden superpower. It can enable your agents to spot key trends, dive deep, predict outcomes, and increase productivity. Accurate analysis also gives your team the ability to tailor their efforts and prioritize high-value prospects. Plus, it may even help spotlight new opportunities for your business to pursue.

Sales analytics allows you to better gauge team performance and uncover areas for improvement, too. Understanding those strengths and weaknesses leads to better training, more attainable goals, and a cohesive team.</p>
  <button type='button' className='btn btn-dark shadow-lg p-2'>Analyse Data</button>
  <br/>
  <br/>
  <button type='button' className='btn btn-primary shadow-lg p-2'>Generate Report</button>

  </div>
</div>
</div>
    </div>
  )
}
export default start