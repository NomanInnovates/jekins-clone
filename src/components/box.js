import React from 'react';
import shuffleIcon from './assets/icons/70115.png'
import './sectionOne.css'
function Box(props){
return(
    <div className="box-setting">
        <div className="box-img">
        <img src={shuffleIcon} alt="box_icon" />
        </div>
        <div className="box-text">
        <h5 className="box-title" >{props.title}</h5>
        <p className="box-sub-text">{props.desc}</p>
    </div>
    </div>
)
}
export default Box;