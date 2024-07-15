import React from 'react';
import "./styles/Instagram.css";



export default function Instagram() {
  return (
    <div className='instagramContainer'>

    <div className='instagramContent' >
    <iframe
      src="https://www.instagram.com/dra.renatabiesdorf/embed"
      width="100%"
      height="100%"
      frameBorder="0"
      scrolling="no"
      allowTransparency="true"
      title="Instagram Profile"
      style={{ border: "none", overflow: "hidden" }}
    ></iframe>
  </div>
  </div>

  );
}
