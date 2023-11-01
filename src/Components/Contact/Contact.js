import React from 'react';
import "./Contact.css";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const Name = form.name.value;
        const Email = form.email.value;
        const messages = form.message.value;
        fetch(`${process.env.REACT_APP_SERVER}/post`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ Name, Email, messages })
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Message Saved");
                    form.reset();
                }
            })
            .catch(error=>{
                toast.error(error.messages);
                form.reset();
            })
    }
    return (
        <div className='container-fluid mt-5' style={{ backgroundColor: "#333" }} id='contact'>
            <div className="row" >
                <div className="col-12 col-md-12 col-lg-12">
                    <header className='d-flex justify-content-center ' >
                        <h1 className='fw-bold' style={{ fontSize: "36px" }}>Drop your message here!</h1>
                    </header>
                    <div className="contact-form">
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" required />

                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required />

                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="4" required style={{ resize: "none" }}></textarea>

                            <button type="submit" className='contactButton'>Send Message</button>
                            <Toaster />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;