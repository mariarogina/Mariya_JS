import React, { useState, useCallback } from 'react';

//popupbox, content, buttons and useState go together

const PopupContent = props => {

    return (
      <div className="popup-box">
        <div className="box">
          <span style={{color:"red"}} className="close-icon" onClick={props.handleClose}>X</span>
          {props.content}
        </div>
      </div>
      
    );
  };


  function Popup({data : {btnValue, paragraph, title, imgSrc}}) {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
      setIsOpen(!isOpen);
    }
   
    return <div>
      <input
        type="button"
        value={btnValue}
        onClick={togglePopup}
      />
      <p>{paragraph}</p>
      {isOpen && <PopupContent
        content={
          <div>
            <h1 className = "poptext">{title}</h1>
            <img src={imgSrc} alt={title}/>
          </div>
        }
        handleClose={togglePopup}
      />}

    </div>
  }
 
  
  export default Popup;