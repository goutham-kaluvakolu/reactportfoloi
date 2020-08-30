import React, { Component } from 'react'

import "./project.css"
class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {data:[{"title":"HULU_CLONE","dis":"Made wih HTML5,CSS3,REACT,FIREBASE,tmdb API"}
    ,{"title":"HULU_CLONE","dis":"Made wih HTML5,CSS3,REACT,FIREBASE,tmdb API"},
    {"title":"HULU_CLONE","dis":"Made wih HTML5,CSS3,REACT,FIREBASE,tmdb API"},
    {"title":"HULU_CLONE","dis":"Made wih HTML5,CSS3,REACT,FIREBASE,tmdb API"},
    {"title":"HULU_CLONE","dis":"Made wih HTML5,CSS3,REACT,FIREBASE,tmdb API"},
    {"title":"HULU_CLONE","dis":"Made wih HTML5,CSS3,REACT,FIREBASE,tmdb API"},
    {"title":"HULU_CLONE","dis":"Made wih HTML5,CSS3,REACT,FIREBASE,tmdb API"},
    {"title":"HULU_CLONE","dis":"Made wih HTML5,CSS3,REACT,FIREBASE,tmdb API"},] }
    }
    
    render() { 
        const print= this.state.data.map((item)=>{return(<div className="project"><div className="project_info">
        <h4>{item.title}</h4>
        <p>{item.dis}</p>
      </div><div className="button">Link</div></div>);});
        return (<div className="project_Holder"> 
      
      {print}
        
      </div>);
    }
}
 
export default Projects;