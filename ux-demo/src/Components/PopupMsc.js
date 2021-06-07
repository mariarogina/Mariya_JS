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


  function PopupMsc() {
    const [isOpen, setIsOpen] = useState(false);
   
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }
   
    return <div>
     
      <input
        type="button"
        value="Come and visit Moscow"
        onClick={togglePopup}
      />
      <p>Moscow is the Capital of Russia</p>
      {isOpen && <Popup
        content={<div><h1 className = "poptext">"Welcome to Moscow"</h1>
        <img src="https://gkd.ru/assets/i/ai/4/2/8/i/2884202.jpg" ></img></div>}
        handleClose={togglePopup}
      />}
     



    </div>
  }
 
  
  export default PopupMsc;