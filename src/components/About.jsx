import React from "react";
import "../styles/about.css"
const About=({about,greenText,img, Topic, paraText})=>{
    return(<div className={about}>
        <div className="img-border">
            <img src={img} alt="gimg"/>
        </div>
        <div className="text">
            <h5 className="greentext">{greenText}</h5>
            <h3 className="topic">{Topic}</h3>
            <p>{paraText}</p>
        </div>
    </div>)
}

export default About;