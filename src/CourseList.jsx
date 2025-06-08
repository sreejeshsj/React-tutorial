import React from "react";
import HTML from "./assets/html.png";
import CSS from "./assets/css.jpg";
import JS from "./assets/js.jpg";
import Course from "./course/Course";

function CourseList() {
  const courselist = [
    {
      name: "HTML",
      price: "$199",
      rating: 9,
      image: HTML,
    },
    {
      name: "CSS",
      price: "$199",
      rating: 9,
      image: CSS,
    },
    {
      name: "JS",
      price: "$199",
      rating: 9,
      image: JS,
    },
  ];

  const course = courselist.map((item) => (
    <Course
      name={item.name}
      price={item.price}
      image={item.image}
      rating={item.rating}
    />
  ));
  return <div>{course}</div>;
}

export default CourseList;
