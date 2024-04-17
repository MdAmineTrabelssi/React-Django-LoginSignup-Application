import React from "react";
import {FaFacebookSquare, FaInstagramSquare, FaLinkedinIn, FaTwitterSquare, FaWhatsappSquare, } from "react-icons/fa"
import {Link} from "react-router-dom"

function Footer() {
    return (
        <div className="max-w-[1500px] mx-auto text-white grid py-5 pt-20">
            <div>
                
<div style={{ borderTop: '1px solid #ccc', margin: '10px 0' }}></div>

                <div className="flex md:w-[75%] justify-between p-10 py-20">
                    
                    <FaFacebookSquare  size={30}/>
                    <FaInstagramSquare  size={30}/>
                    <FaTwitterSquare  size={30}/>
                    <FaWhatsappSquare  size={30}/>
                    <FaLinkedinIn  size={30}/>
                </div>
                <br></br>
            </div>
            <div className=" flex w-[100%] px-3 justify-between">
            <div className="md:w-1/3 w-1/2">
                        <h1 className="font-bold ">Do Not Sell My Personal Information</h1>
                        <ul className="pt-3">
                        <li>Terms of Use</li>
                        <li>Privacy Policy</li>
                        <li>Cookies Settings</li>
                        </ul>
                        <div style={{ borderTop: '1px solid #ccc', margin: '20px 0' }}></div>
                </div>
                <div className="md:w-1/3 w-1/2">
                        <h1 className="font-bold ">ABOUT US</h1>
                        <ul className="pt-3">
                           <Link to="/About_us">  <li>About Audit-X</li></Link>
                            <li>Careers</li>
                            <li>Contact Us</li>
                        </ul>
                        <div style={{ borderTop: '1px solid #ccc', margin: '20px 0' }}></div>
                </div>
                <div className="md:w-1/3 w-1/2">
                        <h1 className="font-bold ">Support</h1>
                        <ul className="pt-3">
                        <li>Help</li>
                        <li>Sitemap</li>
                        <li>Legal & Privacy information</li>
                        </ul>
                        <div style={{ borderTop: '1px solid #ccc', margin: '20px 0' }}></div>
                </div>
            </div>
        </div>
    );
}

export default Footer;


