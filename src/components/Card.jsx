import React from "react"
import "../styles/card.css"
const Card=({card, item,para})=>{
    return(<div className={card}>
        {item}
        <p>{para}</p>
    </div>)
}

export default Card