import React from 'react'
import { useNavigate } from 'react-router-dom';


export default function ContentBlock({text,buttonText,src,children,route}) {
    let image;
    let contentBlock;
    const navigate=useNavigate();

    if(src.includes("my")){
      contentBlock=false;
       image = <img className="width-90 height-90 me-5 mt-5 rounded-circle" src={src} alt="icon"></img>
      }else{
        contentBlock=true;
        image = <img className="w-100 h-100" src={src} alt="icon"></img>
      }
  return (
    <div className={`d-flex height-40 ${contentBlock ? "contentBlock" : "plaincontentBlock"}`}>
    <div className="w-50 text-center">
    <div className={`mb-3 ms-5  w-80 defaultmt-5 ${contentBlock ? "textclr" :"plaintext"}`}>
      <h3 className={`fw-bold height-10 mt-3 mb-5 ms-2 w-auto ${contentBlock ? "olivetextColor" :"plaintext"}`}>{text}</h3>
    </div>
    {children}
    <button className={`mt-2 height-10 mb-3 me-5 ${contentBlock ? "mybtn-clr" :"plainbtn"}`} onClick={()=>navigate(route)}>{buttonText}</button>
    </div>
    <div className="w-50 text-white text-center">
       {image}
   </div>
  </div>
  )
}
