import React from 'react'
import { useNavigate } from 'react-router-dom';


export default function ContentBlocklrftImg({ text, buttonText, src,children,route }) {
  let image;
  const navigate=useNavigate();

  image = <img className="w-100 h-100 img-fluid" src={src} alt="icon"></img>
  return (
    <div className="d-flex height-40 contentBlock">
      <div className="w-50 text-center">
        {image}
      </div>
      <div className="w-50 text-dark text-center">
        <div className="mb-3 textclr ms-5 w-50 defaultmt-5">
          <h3 className="fw-bold height-10 mt-5 mb-5 w-auto olivetextColor">{text}</h3>
        </div>
        {children}
        <button className="mybtn-clr height-10 mt-2 mb-5 ms-5" onClick={()=>navigate(route)}>{buttonText}</button>
      </div>
    </div>
  )
}
