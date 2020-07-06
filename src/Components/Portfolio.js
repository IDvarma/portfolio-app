import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faAddressBook, faChartArea, faChartLine, faCar, faDatabase, faBook, faPenSquare, faUsers, } from "@fortawesome/free-solid-svg-icons";

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={projects.url} title={projects.title} target="_blank">
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
      var certifications = this.props.data.certifications.map((certification) => {
        var certificationImage = 'images/portfolio/' + certification.image
        return <div key={certification.title} className="columns portfolio-item">
        <div className="item-wrap">
         <a href={certification.url} title={certification.title} target="_blank">
            <img alt={certification.title} src={certificationImage} />
            <div className="overlay">
               <div className="portfolio-item-meta">
              <h5>{certification.title}</h5>
                  <p>{certification.category}</p>
               </div>
             </div>
           <div className="link-icon"><i className="fa fa-link"></i></div>
         </a>
       </div>
     </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

         <h1>Certifications</h1>

         <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {certifications}
          </div>

            <h1>Check Out Some of My Works.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
          </div>
      </div>

      <VerticalTimeline>
      <VerticalTimelineElement
    className="vertical-timeline-element--work"
    
    contentArrowStyle={{ borderRight: '7px solid  #000000' }}
    date="May 2020"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', paddingLeft: 9 }}
    icon={<FontAwesomeIcon icon={faUsers} />}
  >
    <h3 className="vertical-timeline-element-title">Recommendation System</h3>
    <h6 className="vertical-timeline-element-subtitle">I have created 2 types of recommendation systems:</h6>
    <ol style={style.descriptionText}>
      <li>Collaborative filtering recommender on Movie dataset</li>
      <li>Item-based recommender on Cuisine dataset</li>
    </ol>
    <a href='https://github.com/saloni2596/Recommendation-System' target='_blank' className="button"><i className="fa fa-github" style={{paddingRight: 6}}></i>View on GitHub</a>
  </VerticalTimelineElement>

      <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)' }}
    contentArrowStyle={{ borderRight: '7px solid  #000000' }}
    date="February 2020"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff', paddingLeft: 9 }}
    icon={<FontAwesomeIcon icon={faBriefcase} />}
  >
    <h3 className="vertical-timeline-element-title">Smart Subscription Application Analysis and Product Management</h3>
    <h6 className="vertical-timeline-element-subtitle">Designed and prototyped a Product Requirement Document consisting of a comprehensive Product Roadmap, Metrics, Storyboards, Projected Costs and Potential Risks for a one-stop solution to manage all the subscriptions. Used Unified Modeling Language (UML) to transform business issues and objectives to concrete software solutions that meet business needs.</h6>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentArrowStyle={{ borderRight: '7px solid  #000000' }}
    date="September 2019"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', paddingLeft: 9 }}
    icon={<FontAwesomeIcon icon={faChartArea} />}
  >
    <h3 className="vertical-timeline-element-title">Data architecture and warehousing for Retail Business</h3>
    <h6 className="vertical-timeline-element-subtitle">Designed a business intelligence solution to forecast the online and store sales using ETL mappings and workflows. Created reports and dashboards to analyze business requirements.</h6>
    <ol style={style.descriptionText}>
      <li>Data Sources used: CSV, PostGreSQL, SQL Server</li>
      <li>Tools used: Talend, Alteryx, Tableau, PowerBI, QlikSense</li>
    </ol>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)' }}
    contentArrowStyle={{ borderRight: '7px solid  #000000' }}
    date="May 2019"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff', paddingLeft: 9  }}
    icon={<FontAwesomeIcon icon={faChartLine} />}
  >
    <h3 className="vertical-timeline-element-title">City Scrapper</h3>
    <h6 className="vertical-timeline-element-subtitle">Web scraping in python to collect data from Wikipedia about the top cities in the United States Using beautiful soup, urllib, pandas and numpy libraries.</h6>
    
    
    <a href='https://github.com/saloni2596/City_Scrapper' target='_blank' className="button"><i className="fa fa-github" style={{paddingRight: 6}}></i>View on GitHub</a>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    
    contentArrowStyle={{ borderRight: '7px solid  #000000' }}
    date="March 2019"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', paddingLeft: 9  }}
    icon={<FontAwesomeIcon icon={faPenSquare} />}
  >
    <h3 className="vertical-timeline-element-title">Sarcasm Detection in Text</h3>
    <h6 className="vertical-timeline-element-subtitle">Detected whether the sentence contains sarcasm or not using concepts of natural language processing to achieve the task of classification. This project is based on machine learning pipeline wherein steps like data pre-processing, data transformation, model building and model tunning is done.</h6>

    <a href='https://github.com/saloni2596/Sarcasm-Detection-In-Text' target='_blank' className="button"><i className="fa fa-github" style={{paddingRight: 6}}></i>View on GitHub</a>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)' }}
    contentArrowStyle={{ borderRight: '7px solid  #000000' }}
    date="January 2019"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff', paddingLeft: 9  }}
    icon={<FontAwesomeIcon icon={faCar} />}
  >
    <h3 className="vertical-timeline-element-title">New York Taxi Fare Prediction</h3>
    <h6 className="vertical-timeline-element-subtitle">A playground Kaggle competition on New York City Taxi Fare Prediction with a dataset of 44M rows to predict the taxi fare amount (inclusive of tolls) given the pickup and dropoff locations by training various models.</h6>
    
    <a href='https://github.com/saloni2596/New-York-Taxi-Fare-Prediction' target='_blank' className="button"><i className="fa fa-github" style={{paddingRight: 6}}></i>View on GitHub</a>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    
    contentArrowStyle={{ borderRight: '7px solid  #000000' }}
    date="October 2018"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', paddingLeft: 9  }}
    icon={<FontAwesomeIcon icon={faDatabase} />}
  >
    <h3 className="vertical-timeline-element-title">Railway Transit Management System</h3>
    <h6 className="vertical-timeline-element-subtitle">Designed and developed a database system using MySQL and Oracle for maintaining the records of the train schedules, status and bookings done by the passengers. Implemented triggers, stored procedures, views, prepared statements, full text search, cursors, exception handling and user defined functions to get more insights from the data</h6>
    
  </VerticalTimelineElement>



      </VerticalTimeline>
   </section>
    );
  }
}

const style = {
  descriptionText: {
    color: 'black',
    fontWeight: 'bold',
  }
};

export default Portfolio;
