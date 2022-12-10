import React, { useState } from "react";
import CardComp from "./CardComp";

const AllCards = () => {

    const [cardDatas , setCardData] = useState([
        { title:"Samsung", description:"This is Mobile", price:"10000", highlight:"Affordable", offer:"10%" } ,
        { title:"Nokia", description:"This is Mobile", price:"15000", highlight:"Affordable", offer:"10%"} ,
        { title:"Poco", description:"This is Mobile", price:"12000", highlight:"Affordable", offer:"10%" } ,
        { title:"Realme", description:"This is Mobile", price:"6000", highlight:"Affordable", offer:"10%" },
      ]);

      return (
        <div style={{display:"flex" , padding:"5px", marginTop:"20px"}}>
        {
            cardDatas.map((data) => <CardComp cardComp={data} /> )
        }
        </div>
      );

};

export default AllCards;