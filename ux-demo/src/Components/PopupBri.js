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


  function PopupBri() {
    const [isOpen, setIsOpen] = useState(false);
   
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }
   
    return <div>
      <input
        type="button"
        value="Come and visit London"
        onClick={togglePopup}
      />
      <p>London is the Capital of Great Britain</p>
      {isOpen && <Popup
        content={<div><h1 className = "poptext">"Welcome to London"</h1>
        <img src="https://www.overseasattractions.com/wp-content/uploads/2018/08/london-at-night.jpg" ></img></div>}
        handleClose={togglePopup}
      />}
     



    </div>
  }
 
  
  export default PopupBri;