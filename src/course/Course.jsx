import "./course.css";
import PropTypes from 'prop-types';
function Course(props) {
  if (props.show) {
    return (
      <>
        <div className="card">
          <img src={props.image} alt="" />
          <h3>{props.course}</h3>
          <p>
            This is an {props.name} by code.io with price {props.price}
          </p>
          <p>Rating : {props.rating}</p>
        </div>
      </>
    );
  }else{
    return(
        <div className="card">
            <h4>Not Logged in</h4>
        </div>
    )
  }
}
Course.propTypes={
    name:PropTypes.string,
    rating:PropTypes.number,
    show:PropTypes.bool
}

export default Course;
