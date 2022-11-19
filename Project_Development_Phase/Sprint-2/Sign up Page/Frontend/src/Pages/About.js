import React from 'react'
import './../css/about.css'

function About() {
  return (
    <div className='about'>
      <div className='firstrow row'>
        <div className='left'>
          <h1>GLOBAL SALES DATA ANALYTICS</h1>
          <p>Global Sales Analytics refers to the technology and processes used to gather sales data and gauge sales performance. Sales leaders use these metrics to set goals, improve internal processes, and forecast future sales and revenue more accurately.</p>
          <p>The goal of Global Sales Analytics is always to simplify the information available to you. It should help you clearly understand your team’s performance, sales trends, and opportunities.</p>
        </div>
        <div className='right'>
          <img src='https://cdni.iconscout.com/illustration/premium/thumb/sales-analysis-6101078-5030576.png' height='50%' width='100%' />
        </div>
      </div>
      <div className='secondrow row'>
        <div className='right'>
            <img src='https://www.pwc.com/us/en/services/consulting/assets/understand_business.svg' height='50%' width='100%' />
          </div>
        <div className='left'>
            <h1>Benefits of sales analytics</h1>
            <p>Sales analytics is your sales team’s hidden superpower. It can enable your agents to spot key trends, dive deep, predict outcomes, and increase productivity. Accurate analysis also gives your team the ability to tailor their efforts and prioritize high-value prospects. Plus, it may even help spotlight new opportunities for your business to pursue.</p>
            <p>Sales analytics allows you to better gauge team performance and uncover areas for improvement, too. Understanding those strengths and weaknesses leads to better training, more attainable goals, and a cohesive team.</p>
          </div>
      </div>
      <div className='thirdrow row'>
        <div className='left'>
            <h1>9 sales metrics to watch</h1>
            <p className='list'>1. Sales growth<br/>2. Sales target<br/>3. target Sales per rep<br/>
            4. Sales by region<br/>
            5. Sell-through rate<br/>
            6. Sales per product<br/>
            7. Pipeline velocity<br/>
            8. Quote to close<br/>
            9. Average purchase value</p>
          </div>
          <div className='right'>
            <img src='https://assets.website-files.com/60e7f71b22c6d0b9cf329ceb/621e193892e8c41051e34fce_StepsforEffectivelyAnalyzingYourSalesData_20971e108bda1d8795a0c640c000e691_2000.png' height='50%' width='100%' />
          </div>
      </div>
    </div>
  )
}

export default About