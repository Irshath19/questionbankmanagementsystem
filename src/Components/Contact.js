import React from 'react'
import '../CSS/Contact.css';
import Logo from '../Images/logo4.jpeg'
const Contact= () => {
return (
    <div className='main'>
        <div className='logoimg'>
            <img src={Logo} alt="logo"  />
        </div>
        <div class="college-info">
    <h2 className='heading1'>College Information</h2>

    <div class="college-details">
    <p>Approved by AICTE, New Delhi | Affiliated to Anna University, Chennai</p>
    <p>Accredited by NBA [CSE, EEE, ECE, IT, MECH] & NAAC with A Grade</p>
    <p>Sri Shakthi Nagar, L & T By - Pass,
        Chinniyampalayam Post, Coimbatore - 62.</p>
    </div>
</div>

<div class="contact-details">
    <h2 className='heading2'>Contact Details</h2>

    <div class="contact-details-inner">
    <p>Principal E-Mail: </p>
    <a href="mailto:principal@siet.ac.in">principal@siet.ac.in</a>
    <p class="phone-number">Mobile Number:</p>
    <a href="+91 75041 69999 ">+91 75041 69999,</a>
    <a href="+91 94446 20505 ">+91 94446 20505</a>
    <p>Admissions E-Mail: </p>
    <a href="mailto:admissions@siet.ac.in">admissions@siet.ac.in</a>
    </div>
</div>
    
    </div>
)
}

export default Contact;