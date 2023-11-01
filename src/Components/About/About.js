import React from 'react';
import "./About.css";

const About = () => {
    return (
        <div className=' container-fluid' style={{ marginTop: "6rem" }} id='about'>
            <div className="row">
                <div className="col-12 col-md-12 col-lg-12">
                    <div className='d-flex justify-content-center'>
                        <h5 className='fw-bolder fs-3'>About <span style={{ color: "#6540F6" }}>Me</span></h5>
                    </div>
                    <div className='mt-3'>
                        <div className='aboutContentDiv'>
                            <div className='aboutContent'>
                                <div className='aboutTextContent'>
                                    <p className='text-start'>Hey there! I'm Swadhin Ghosh, a passionate web developer with a creative mind and a love for turning ideas into interactive digital experiences. I believe that the internet is an ever-evolving canvas, and I'm here to craft beautiful and functional websites that not only look great but also provide exceptional user experiences.</p>
                                </div>
                                <div className='aboutImgDiv' >
                                    <div className='shadow-lg' style={{ height: "280px", width: "200px" }}>
                                        <img src="https://i.ibb.co/TKMM2hc/Whats-App-Image-2023-08-31-at-7-00-05-PM.jpg" alt="" style={{ height: "100%", width: "auto", borderRadius: "10px" }} />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;