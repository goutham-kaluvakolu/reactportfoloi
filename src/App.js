import React from 'react';
import './App.css';
import Header from './Header';
import Mid from "./Mid"
import Info from "./Info"
import Name from "./Name"
import Projects from "./Projects"
import Contact from './contact'
//import { Switch } from '@material-ui/core';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
function App() {
  return (
     <div className="app">
      <Switch>
       <Route exact path="/home">  <Header/>
       <Mid/></Route>
       <Route exact path="/projects">
       <Header/><Name nam="PROJECTS"/> <Projects/>
       </Route>
       <Route path="/info">
       <Header/><Name nam="INFO"/> <Info/>
       </Route>
       <Route path="/contact">
       <Header/><Name nam="CONTACT"/> <Contact/>
       </Route>

       </Switch>
     
     </div>
   
  );
}

export default App;
