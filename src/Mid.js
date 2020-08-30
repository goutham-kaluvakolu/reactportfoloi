import React,{Component} from 'react'
import "./mid.css"
import Info from "./Info"
import Name from "./Name"
import Projects from "./Projects"
import Contact from './contact'

class Mid extends Component {
    state = {pro1:{"title":"ipl","dis":"blahblah"}} 
    render() { 
        return (
            <div className="mid">
                <Name nam="DESCRIPTION"/>
               <Info/> 
               <Name nam="PROJECTS"/>
               <Projects/>
               <Name nam="CONTACT"/>
               <Contact/>
            </div>
        )   
    }
}
 
export default Mid;


