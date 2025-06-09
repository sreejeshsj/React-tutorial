import "./course.css";
import { useState } from "react";
function Course({ name, price, image, rating }) {
  const [purchased,setPurchased]=useState(false)
  function buttonClick(discount){
    if (purchased ){
      setPurchased(false)
    }else{
      setPurchased(true)
    }

    
    console.log(name+" "+'purchased '+  discount +" % Discount")
  }
  return (
    name && <div className="card">
      <h2>{name}</h2>
      <img src={image} alt={name} width="100" />
      <p>Price: {price}</p>
      <button onClick={()=>buttonClick('20')}>Buy now</button>
      <p>{ purchased ? "Already Purchased" : "Get now"}</p>
    </div>

  )
}

export default Course;
