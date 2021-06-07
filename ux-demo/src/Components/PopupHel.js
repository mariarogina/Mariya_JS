import React, { useState } from 'react';

//popupbox, content, buttons and useState go together

const Popup = props => {
    console.log(props);
    return (
      <div className="popup-box">
        <div className="box">
          <span className="close-icon" onClick={props.handleClose}>x</span>
          {props.content}
        </div>
      </div>
      
    );
  };


  function PopupHel() {
    const [isOpen, setIsOpen] = useState(false);
   
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }
   
    return <div>
      
      <input
        type="button"
        value="Come and visit Helsinki"
        onClick={togglePopup}
      />
      <p>Helsinki is the Capital of Finland</p>
      {isOpen && <Popup
        content={<div><h1 className = "poptext">"Welcome to HEL"</h1>
        <img src="https://www.likefinland.com/images/artikkelikuvat/helsinki/allas%20sea%20pool1.jpg" ></img></div>
        }
        handleClose={togglePopup}
      />}



    </div>
  }
 
  
  export default PopupHel;