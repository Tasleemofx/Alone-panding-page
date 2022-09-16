import React from "react";
import "../styles/about.css"
const About=({greenText,img, Topic, paraText})=>{
    return(<div className="about">
        <div className="img-border">
            <img src={img} alt="gimg"/>
        </div>
        <div className="text">
            <h5>{greenText}</h5>
            <h3>{Topic}</h3>
            <p>{paraText}</p>
        </div>
    </div>)
}

export default About;