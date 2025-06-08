import "./course.css";

function Course({ name, price, image, rating }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={image} alt={name} width="100" />
      <p>Price: {price}</p>
      <p>Rating: {rating}/10</p>
    </div>
  )
}

export default Course;
