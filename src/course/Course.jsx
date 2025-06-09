import "./course.css";

function Course({ name, price, image, rating }) {
  function buttonClick(discount){
    console.log(name+" "+'purchased '+  discount +" % Discount")
  }
  return (
    name && <div className="card">
      <h2>{name}</h2>
      <img src={image} alt={name} width="100" />
      <p>Price: {price}</p>
      <button onClick={()=>buttonClick('20')}>Buy now</button>
    </div>
  )
}

export default Course;
