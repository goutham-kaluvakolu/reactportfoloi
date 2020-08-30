import React from 'react'
import "./contact.css"


function Contact() {
    return (
 

<div class="container">

    <label for="fname">Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

    <label for="lname">Subject</label>
    <input type="text" id="lname" name="lastname" placeholder="Subject"/>

   

    <label for="subject">Message</label>
    <input type="text" id="lname" name="lastname" placeholder="Subject" className="msg"/>

    <input type="submit" value="Submit"/>
</div>

        
    )
}

export default Contact;
