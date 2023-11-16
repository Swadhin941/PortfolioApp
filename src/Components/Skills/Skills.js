import React from 'react';
import "./Skills.css";

const Skills = () => {
    const skills = [
        {
            name: "HTML5",
            imgLink: "https://i.ibb.co/vkfvwDt/html5.png"
        },
        {
            name: "CSS",
            imgLink: "https://i.ibb.co/FnNwXHN/css3.png"
        },
        {
            name: "Javascript",
            imgLink: "https://i.ibb.co/gP1JNGZ/javascript.png"
        },
        {
            name: "Bootstrap",
            imgLink: "https://i.ibb.co/GCn7H3F/bootstrap-logo-shadow.png"
        },
        {
            name: "React.JS",
            imgLink: "https://i.ibb.co/3c3N2r6/React-icon.png"
        },
        {
            name: "Express js",
            imgLink: "https://i.ibb.co/fDNKzVG/express-js.png"
        },
        {
            name: "Mongodb",
            imgLink: "https://i.ibb.co/c1DNP8X/mongodb.webp"
        },
        {
            name: "Node.JS",
            imgLink: "https://i.ibb.co/p26KXyY/Node-js-logo.png"
        },
        {
            name: "Socket.IO",
            imgLink: "https://i.ibb.co/wyBJbDB/socketio.png"
        },
        {
            name: "Firebase",
            imgLink: "https://i.ibb.co/SQPcrzJ/Firebase.png"
        },
        {
            name: "Github",
            imgLink: "https://i.ibb.co/kKwCQp8/github.png"
        },
        {
            name: "Next.JS",
            imgLink: "https://i.ibb.co/sK2Cv1f/nextjs.png"
        },
        {
            name: "Python",
            imgLink: "https://i.ibb.co/x6B8grT/python.png"
        },
        {
            name: "Java",
            imgLink: "https://i.ibb.co/2SvzZQb/java.png"
        },
        {
            name: "C",
            imgLink: "https://i.ibb.co/9n2PyCC/c.png"
        },
        {
            name: "C++",
            imgLink: "https://i.ibb.co/LxCMBj8/c.png"
        },
        {
            name: "MySQL",
            imgLink: "https://i.ibb.co/jvQDqy9/Mysql.png"
        },
        {
            name: "Flask",
            imgLink:"https://i.ibb.co/6tQG4vG/flask.jpg"
        }
    ];
    return (
        <div className='row mt-5' id="mySkills">
            <div className="col-12 col-md-12 col-lg-12">
                <div className='d-flex justify-content-center'>
                    <h4 className='fw-bold' style={{color:"#6540F6"}}>My Skills</h4>
                </div>
            </div>
            <div className="col-12 col-md-12 col-lg-12">
                <div className="row mt-3 g-2">
                    {
                        skills.map((item, index) => <div key={index} className='col-6 col-md-4 col-lg-2'>
                            <div className="card" style={{borderTop:"0px", borderLeft:"0px"}}>
                                <div className="card-body">
                                    <div className='d-flex justify-content-center'>
                                        <div className='skillsImgDiv' >
                                            <img src={item.imgLink} alt="" style={{ height: "100%", width: "100%" }} />
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-center'>
                                        <h5 style={{fontWeight:"600"}}>{item.name}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Skills;