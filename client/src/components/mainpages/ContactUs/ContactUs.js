import emailjs from "emailjs-com";
import React from 'react';
import backround1 from './icon/global_color.jpeg'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_j2mifyx', 'template_3bv46z9', e.target, 'user_5NUdxookYXupMbgZBCLTF')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
        toast('thank you for your Comment', {
            position: toast.POSITION.BOTTOM_CENTER
          })
    }

    return(
        <div style={{ backgroundImage: `url(${backround1})` }}>
            
        
        <div> 
            <div style={{fontFamily:'Comic Sans MS, Comic Sans, cursive'}} style={{textAlign: 'center'}} >
            <h1 style={{fontFamily:'Comic Sans MS, Comic Sans, cursive'}}>Contact Me</h1>
            <h3 style={{fontFamily:'Comic Sans MS, Comic Sans, cursive'}} >Tel: 054-9955-695</h3>
            <h3 style={{fontFamily:'Comic Sans MS, Comic Sans, cursive'}}>Email: shaydilouya@yahoo.com</h3>
            <h3 style={{fontFamily:'Comic Sans MS, Comic Sans, cursive'}}>Email: shaydilouya@google.com</h3>
            <h3 style={{fontFamily:'Comic Sans MS, Comic Sans, cursive'}}>Address: Dizengoff 173, Tel-Aviv</h3>
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/>
        <div className="w3-card-4">
            <form onSubmit={sendEmail}>
                 <div class="w3-container w3-transparent">
                <h2 >Write Your Comments:</h2>
                 </div>
                    <div className="w3-container">
                        <div>
                            <input type="text" className="w3-input w3-border w3-transparent" placeholder="Name" name="name"/>
                        </div>
                        <div>
                            <input type="email" className="w3-input w3-border w3-transparent" placeholder="Email Address" name="email"/>
                        </div>
                        <div>
                            <input type="text" className="w3-input w3-border w3-transparent" placeholder="Subject" name="subject"/>
                        </div>
                        <div>
                            <textarea className="w3-input w3-border w3-transparent" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div>
                            <input type="submit" className="w3-btn w3-transparent" value="Send Message" ></input>
                        </div>
                    </div>
                </form>
                
            </div>
        </div>
        </div>
    )
}


