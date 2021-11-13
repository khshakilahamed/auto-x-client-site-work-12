import React from 'react';
import './Footer.css';


// https://i.ibb.co/qMt1ff9/linkedin.png
// https://i.ibb.co/NjcQsT6/facebook.png
// https://i.ibb.co/rQhphcC/insta.png
// https://i.ibb.co/FHw3fg9/twitter.png

const Footer = () => {
    return (
        <div className="text-light bg-dark py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mt-3 px-3">
                        <h4 className="text-uppercase mb-3">Join With Us</h4>
                        <div>
                            <img className="facebook" src={"https://i.ibb.co/NjcQsT6/facebook.png"} alt="" />
                            <img className="linkedin mx-4" src={"https://i.ibb.co/qMt1ff9/linkedin.png"} alt="" />
                            <img className="instagram me-4" src={"https://i.ibb.co/rQhphcC/insta.png"} alt="" />
                            <img className="twitter" src={"https://i.ibb.co/FHw3fg9/twitter.png"} alt="" />
                        </div>

                        <p className="mt-3">@ 2021 AutoX Designed by Kh. Shakil</p>
                    </div>
                    <div className="col-md-5 mt-3  px-3">
                        <h4 className="text-uppercase mb-3">Let us know your Suggestion</h4>
                        <div className="user-feedback-container">
                            <input type="text" placeholder="Name" />
                            <input type="email" name="" id="" placeholder="Email" />
                            <textarea name="" id="" cols="30" rows="5" placeholder="Write your suggestion" />
                        </div>
                    </div>
                    <div className="col-md-3 mt-3">
                        <h4 className="text-center text-uppercase mb-3">Quick Links</h4>
                        <div className="quick-links text-center">
                            {/* <Link to="/home" className="navItems">Home</Link>
                            <Link to="/services" className="navItems">Services</Link>
                            <Link to="/packages" className="navItems">Packages</Link>
                            <Link to="/blogs" className="navItems">Blogs</Link>
                            <Link to="/about" className="navItems">About Us</Link> */}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;