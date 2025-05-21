import React, { useState,useRef } from 'react'
import emailjs from 'emailjs-com';


const FooterForm = () => {

    const form = useRef();
    const [visitorData,setVisitorData] = useState({
        firstName:'',
        lastName:'',
        email:''
    })
    const handleFirstNameChange = (event)=>{
        setVisitorData({
            ...visitorData,
            firstName: event.target.value
        })
    }
    const handleLastNameChange = (event)=>{
        setVisitorData({
            ...visitorData,
            lastName: event.target.value
        })
    }
    const handleEmailChange = (event)=>{
        setVisitorData({
            ...visitorData,
            email: event.target.value
        })
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
     console.log(visitorData)
     emailjs.sendForm("service_unys6vk", "template_76h3vvc",form.current, "tchUN51JGgo1Ni7QU")
     .then((result) => {
       console.log('Success:', result.text);
       alert('Email sent!');
     }, (error) => {
       console.error('Error:', error.text);
     });
    }
    return (
        <div className="container mt-5 d-flex w-100">
            {/* Left side: Let's Connect */}
            <div className="w-35 p-2">
                <h2 className="mb-3">Let's Connect</h2>
                <p>We’d love to hear from you. Reach out anytime!</p>
                <div className="d-inline-flex gap-3 align-items-center">
                    <a href="https://www.instagram.com/texturedcanvaspainting" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram fa-lg text-dark"></i>
                    </a>
                    <a href="https://www.youtube.com/@R-ArtTherapy/shorts" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-youtube fa-lg text-dark"></i>
                    </a>
                    <a href="https://www.tiktok.com/@textureandtones?_t=ZP-8wXebx8Cwwh&_r=1" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-tiktok fa-lg text-dark"></i>
                    </a>
                </div>
            </div>

            <div className="w-70 p-4">
                <form ref={form} onSubmit={handleSubmit}>
                    <div className="w-75 ms-5">
                        <p>Join the newsletter to see whats new!</p>
                    </div>
                    <div className="ms-1 mt-2">
                        <input name="first_name" type="text" className="form-control w-60 ms-3" placeholder="First Name" value={visitorData.firstName}
                        onChange={handleFirstNameChange}/>
                    </div>
                    <div className="ms-1 mt-2">
                        <input name="last_name" type="text" className="form-control w-60 ms-3" placeholder="Last Name" value={visitorData.lastName}
                        onChange={handleLastNameChange}/>
                    </div>
                    <div className="ms-1 mt-2">
                        <input name="email" type="text" className="form-control w-60 ms-3" placeholder="Email" value={visitorData.email}
                        onChange={handleEmailChange}/>
                    </div>
                    <div className="ms-5 w-50 mt-1 mb-2">
                        <button className="mt-3 submitBtn" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FooterForm
