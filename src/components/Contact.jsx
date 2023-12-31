import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import '../components/contact.css';

const Contact = () => {
  return (
    <div>
      <div className="container-fluid">
      <div className="row" id="contact">
            <ul>
                <li><FaPhoneAlt/> +91 8192678345</li>
                <li><IoIosSend/> foodeast@gmail.com</li>
                <li>Lorem ipsum dolor sit amet.</li>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
