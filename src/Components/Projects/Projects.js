import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    const projects=[
        {
            name: "E-buy",
            description: "An e-commerce site where people can sale their used phone or new and buyer can buy those phone through the app.",
            imgLink: "https://i.ibb.co/T1nkD7G/Home-page.png",
            appLink: "https://phoneresale-d5194.web.app/",
            serverCode:"https://github.com/Swadhin941/PhoneResaleServer",
            clientCode:"https://github.com/Swadhin941/PhoneResaleClient"
        },
        {
            name: "WeTalk",
            description:"A chatting application with some basic features where people can talk with each other and can share their emotion via text messages.",
            imgLink: "https://i.ibb.co/KGKKxvS/Chats-with-real-time-typing-status.png",
            appLink: "https://chattingapp-a9455.web.app/login",
            serverCode:"https://github.com/Swadhin941/WeTalkBackend",
            clientCode:"https://github.com/Swadhin941/WeTalkFrontend"
        }
    ]

    const handleLive=(link)=>{
        window.location.href= link
    }

    const handleClient=(link)=>{
        window.location.href= link

    }

    const handleServer=(link)=>{
        window.location.href= link
    }

    return (
        <div className='container-fluid mt-5' id='project'>
            <div className="row ">
                <div className="col-12 col-md-12 col-lg-12">
                    <div className='d-flex justify-content-center'>
                        <h5 className='fw-bold'>My Projects</h5>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-12 mt-3">
                    <div className="row g-2 d-flex justify-content-center">
                        {
                            projects.map((item, index)=><div key={index} className='col-12 col-md-6 col-lg-4'>
                                <div className="card" style={{height:"320px"}}>
                                    <div className="card-body">
                                        <div className='w-100' style={{height:"100px"}}>
                                            <img src={item.imgLink} alt="" style={{height:"100%", width:"100%"}} />
                                        </div>
                                        <div className='mt-2'>
                                            <h5 style={{fontWeight:"600"}}>{item.name}</h5>
                                            <p><small>{item.description}</small></p>
                                        </div>
                                    </div>
                                    <div className="card-footer bg-custom">
                                        <div className='d-flex justify-content-between'>
                                            <div>
                                                <button className='btn btn-sm btn-primary' onClick={()=>handleLive(item.appLink)}>Live Link</button>
                                            </div>
                                            <div>
                                                <button className='btn btn-sm btn-success' onClick={()=>handleClient(item.clientCode)}>Client Code</button>
                                            </div>
                                            <div>
                                                <button className='btn btn-sm btn-warning' onClick={()=>handleServer(item.serverCode)}>Server Code</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;