import React from 'react'

export default function aboutMeContent({text,src,children}) {
    let image;
    let contentBlock;
    if(src.includes("my")){
      contentBlock=false;
       image = <img className="w-100 h-50 mt-5 rounded-circle img-fluid" src={src} alt="icon"></img>
      }else{
        contentBlock=true;
        image = <img className="w-100 h-75 mt-5 img-fluid" src={src} alt="icon"></img> 
      }
  return (
    <div className={`d-flex mt-5 mb-5 height-40 ${contentBlock ? "aboutMeContent" : "plaincontentBlock"}`}>
    <div className="w-50 text-center">
    <div className={`mb-3 ms-3  w-90 mt-5 me-2 ${contentBlock ? "textclr" :"plaintext"}`}>
      <h3 className={`fw-bold height-10  mb-5 ms-2 w-auto ${contentBlock ? "abouttextColor" :"plaintext"}`}>{text}</h3>
    </div>
    {children}
    </div>
    <div className="w-50 text-white text-center">
       {image}
   </div>
  </div>
  )
}
