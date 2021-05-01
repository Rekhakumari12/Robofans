import React from 'react';
import './popup.css';
const popup = ({closePopup,image})=> {
  console.log(image);
  return (
    <div className="popup_back">
      <div className="popup">
        <div className="cross" onClick={closePopup}>x</div>
        <div className="show_image">
          <img src={image} width="500"/>
        </div>
       </div>
    </div>
  )
}
export default popup;