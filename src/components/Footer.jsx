import React from 'react';
import { FaHeart } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";


const Footer = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row d-flex justify-content-between gap-4 flex-wrap">
            <div className="col-lg-3 col-md-3 col-sm-3">
                <h3 className='logo'>BigFruitz</h3>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium temporibus ipsum rerum deleniti ducimus autem.</p>
                <br />
                <div className="soc d-flex justify-content-evenly me-5">
                    <BsInstagram/>
                    <FaFacebookF/>
                    <FaXTwitter/>
                </div>
            </div>
            <div className="col-auto">
                <h3 className='ms-4'>Menu</h3>
                <br />
                <ul>
                <li><a href='#'>Home</a></li>
                    <li><a href='#'>Shop</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Blog</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
            </div>
            <div className="col-auto">
                <h3 className='ms-4'>Help</h3>
                <br />
                <ul>
                    <li><a href='#'>Shipping Info</a></li>
                    <li><a href='#'>Exchange & Return</a></li>
                    <li><a href='#'>Terms & Conditions</a></li>
                    <li><a href='#'>Privacy Policy</a></li>
                    <li><a href='#'>FAQs</a></li>
                </ul>
            </div>
            <div className="col-auto">
                <h3 className='ms-4'>Have a Question ?</h3>
                <br />
                <ul>
                <li><a href='#'><FaLocationDot/> No 361/4D Thentamil nagar, <br />4 th street Tiruvannamalai , <br />Tamilnadu, India</a></li>
                    <li><a href='#'><IoMdCall/> +91 8146835914</a></li>
                    <li><a href='#'><MdEmail/> info@bigfruitz.com</a></li>
                </ul>
            </div>
        </div>
        <p className='text-center mt-5' style={{marginTop:'3cm'}}> CopyRights &copy; All rights reserved | This Website made with  <FaHeart style={{color:'red'}}/> by Deepak Shiva.</p>
      </div>
    </div>
  );
}

export default Footer;
