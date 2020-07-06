import React, { Component } from 'react';
import Skill from '../Components/Skill';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description.split(".").map(sentence => <span>{sentence}<br /></span>)}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
      {work.description.split(".").map(sentence => <ul style={{listStyle: 'disc'}}><li>{sentence}</li></ul>)}
        </div>
      })
     /* var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })*/
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>



      <div className="row">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

          <p>
            {skillmessage}
          </p>

				{/* <div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div> */}
       {/* Custom Code */}
        <div className="bgrid-thirds s-bgrid-quarters cf">
          <div className="row">
            <Skill title={"Programming Languages"} skills={["Python", "SQL", "R","Java"]} />
            <Skill title={"Business Intelligence"} skills={["Tableau", "powerBI","DataStudio","Salesforce Analytics", "Trifacta", "Talend", "QlikSense"]} />
            <Skill title={"Databases"} skills={["MySQL","MS SQL Server", "Oracle", "PostgreSQL", "SQLite", "BigQuery"]} />
          </div>
          <div className="row">
            <Skill title={"Big Data Technologies"} skills={["Hadoop", "MongoDB", "Hive", "Spark", "NoSQL", "Apache Airflow"]} />
            <Skill title={"Machine Learning"} skills={["Pandas", "NumPy", "Scikit-Learn", "Matplotlib", "Tensorflow", "Keras", "NLTK", "BeautifulSoup", "pySheets"]} />
            {/* <Skill title={"Cloud Computing"} skills={["Amazon Web Services", "Google Cloud Platform"]} /> */}
            <Skill title={"Miscellaneous"} skills={["Git","Microsoft Office", "Agile/Scrum", "JIRA", "Selenium", "Balsamiq","React", "Amazon Web Services", "Google Cloud Platform"]} />
          </div>
        </div>
			</div>
      </div>
   </section>
    );
  }
}

export default Resume;
