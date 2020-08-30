import React from 'react'
import "./header.css"
import HomeIcon from '@material-ui/icons/Home';
import FlashOnIcon from '@material-ui/icons/FlashOn';

import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import PageviewIcon from '@material-ui/icons/Pageview';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter
  } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <h2>Goutham.</h2>
            <div className="header__icons">
               <Link to="/home" style={{ textDecoration: 'none' }}> <div className="header__icon header__icon--active">
                <HomeIcon/>
                <p>Home</p>
                </div></Link>
                <Link to="/projects" style={{ textDecoration: 'none' }}><div className="header__icon">
                <PageviewIcon/>
                <p>Projects</p>
                </div></Link>
                <Link to="/contact" style={{ textDecoration: 'none' }}>
                <div className="header__icon">
                <ContactMailIcon/>
                <p>Contact</p>
                </div></Link>
            <a href="https://material-ui.com/components/material-icons/" download>
                <div className="header__icon">
                <InsertDriveFileIcon/>
                <p>Resume</p>
                </div></a>
           
            
           
            
            </div>
           
            
        </div>
    )
}

export default Header
