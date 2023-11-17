import React from 'react';
import "./Topbanner.css";
import toast, { Toaster } from 'react-hot-toast';
import useTitle from '../CustomHook/useTitle';

const Topbanner = () => {
    useTitle("Portfolio-Swadhin Ghosh");
    return (
        <div className='container-fluid mt-5 bg-custom' id='topBanner'>
            <div className="row">
                <div className="col-12 col-md-12 col-lg-12">
                    <div className='d-flex justify-content-center'>
                        <div className='topBanner'>
                            <div className='d-flex justify-content-center align-items-center topContentDiv'>
                                <div className='topContent'>
                                    <h6 className='fw-bold'>Hello! I'm</h6>
                                    <div className='ms-3'>
                                        <h1 className='fw-bolder' style={{ color: '#6540F6' }}>Swadhin Ghosh</h1>
                                        <p >- <span className='fw-bolder'>Full-stack Developer</span></p>
                                        <div>
                                            <a href='https://drive.google.com/file/d/18QzBlpz8miwqRKXdrl_0zfQ64m65b4LQ/view?usp=drive_link' className='btn btn-cv'>Download Resume</a>
                                            <Toaster />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className='imgDiv'>
                                <img src="https://i.ibb.co/TKMM2hc/Whats-App-Image-2023-08-31-at-7-00-05-PM.jpg" alt="" className='img-fluid' />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Topbanner;