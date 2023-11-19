import React from 'react';
import "./Footer.css";

const Footer = () => {
    const handleProfiles=(data)=>{
        if(data==='linkedin'){
            window.location.href="https://www.linkedin.com/in/swadhin-g-08b1a1101";
        }
        if(data==='github'){
            window.location.href='https://github.com/Swadhin941'
        }
        if(data==='facebook'){
            window.location.href="https://www.facebook.com/swadhinghosh0013/"
        }
    }

    return (
        <div className='container-fluid p-0 mt-3' id='footer'>
            <div className="row">
                <div className="col-12 col-md-12 col-lg-12">
                    <footer>
                        <div className="footer-container p-2">
                            <div >
                                <a href="#topBanner" className='navbarLogo text-decoration-none p-2 text-white'>SG</a>
                            </div>

                            <div className="footer-social">
                                <ul>
                                    <li onClick={()=>handleProfiles('linkedin')}><i className='bi bi-linkedin text-primary fs-3'></i></li>
                                    <li onClick={()=>handleProfiles('github')}><i className="bi bi-github fs-3"></i></li>
                                    <li onClick={()=>handleProfiles('facebook')}><i className="bi bi-facebook text-primary fs-3"></i></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-links d-flex justify-content-center mt-3">
                            <ul>
                                <li><a href="#about">About Me</a></li>
                                <li><a href="#contact">Contact Me</a></li>
                            </ul>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default Footer;