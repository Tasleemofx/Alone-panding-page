import React from "react";
const About=({
    greenText, Topic, paraText
})=>{
    <div>
        <div className="img-border">

        </div>
        <div className="text">
            <h5>{greenText}</h5>
            <h3>{Topic}</h3>
            <p>{paraText}</p>
        </div>
    </div>
}

export default About;