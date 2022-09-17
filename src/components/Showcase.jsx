import React from "react";
import Card from "./Card"
import "../styles/showcase.css"
import {
  FaRegMoneyBillAlt,
  FaFeather,
  FaHandHoldingMedical,
} from "react-icons/fa";

const Showcase=()=>{
    return (
        <div className="showcase">
            <h4 className="show-top">Go Digital</h4>
            <h3>
                Keep track of products and process orders
            </h3>
            <img src="./images/high.png" alt="background" />
            <div className="show-grid">
                <Card card="card1" item={<FaRegMoneyBillAlt/>} 
                para={"Emerald investment requested 3 bags of rice"}/>
                <Card card="card2" item={ <FaFeather/> }
                para={"You processed 21bags of beans today"}/>
                <Card card="card3" item={<FaHandHoldingMedical/>}
                para={"You have recieved a payment from mavi ltd"}/>
            </div>
            
        </div>
    )
}

export default Showcase;