import React from 'react'
import { useNavigate } from 'react-router-dom';


export default function ContentBlocklrftImg({ text, buttonText, src, children, route }) {
  let image;
  const navigate = useNavigate();

  image = <img className="w-100 h-100 img-fluid" src={src} alt="icon"></img>
  return (
    <div className="d-flex h-auto contentBlock">
      <div className="w-50 text-center">
        {image}
      </div>
      <div className="w-50 text-center mx-auto">
        <div className="textclr defaultmt-5 w-75 text-center mx-auto">
          <h3 className="fw-bold olivetextColor">{text}</h3>
        </div>
        <div className='d-flex justify-content-center'>
          {children}
        </div>
        <button className="mybtn-clr height-10 mb-3 w-auto" onClick={() => navigate(route)}>{buttonText}</button>
      </div>
    </div>
  )
}
