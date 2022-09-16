import React from "react";
import Card from "./Card"
import "../styles/showcase.css"
import { FaRegMoneyBillAlt } from "react-icons/fa"
const Showcase=()=>{
    return (
        <div className="showcase">
            <h4 className="show-top">Go Digital</h4>
            <h3>
                Keep track of products and process orders
            </h3>
            <Card item={<FaRegMoneyBillAlt/>}
            para={"Emerald investment requested 3 bags of rice"}/>
            <Card para={"You processed 21bags of beans today"}/>
            <Card para={"You have recieved a payment from mavi ltd"}/>
            
        </div>
    )
}

export default Showcase;