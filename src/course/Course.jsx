import "./course.css";
import { useState } from "react";
function Course({ id,name, price, image, fn }) {
  const [purchased,setPurchased]=useState(false)
  const [courseprice ,setPrice]=useState(price)
  function buttonClick(discount){
    if (discount){
      setPrice(courseprice-discount)
    }

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
      <p>Price: {courseprice}</p>
      <button onClick={()=>buttonClick(20)}>Buy now</button>
      <button onClick={()=>fn(id)}>Delete</button>
      <p>{ purchased ? "Already Purchased" : "Get now"}</p>
      
    </div>

  )
}

export default Course;
