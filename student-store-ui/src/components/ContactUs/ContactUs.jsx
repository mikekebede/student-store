import * as React from "react"
import  "./Contactus.css";

export default function ContactUs() {

    return (
  <div id="Contact" className="contact">
    <div className="content">
        <h3 className="c">Contact Us</h3>
        <div className="summary">
            <ul className="info">
                <li><span className="label">Email:</span>
                <span>code@path.org</span></li>
                <li><span className="label">Phone:</span>
                <span>1-800-CODEPATH</span></li>
                <li><span className="label">Address:</span>
                <span>123 Fake Street, San Francisco, CA</span></li>
            </ul>
</div>
<img  className="student" src="https://media.istockphoto.com/id/1161151670/photo/happy-student-with-books-looking-at-camera-in-library.jpg?s=612x612&w=0&k=20&c=OqQ6I5YXqnVJKRdpFUteS8HHitznuvEdPHrPsNbFK6g="/>
</div>
</div>
  )
}
