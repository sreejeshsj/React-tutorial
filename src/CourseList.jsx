import React, { useEffect, useState } from "react";
import HTML from "./assets/html.png";
import CSS from "./assets/css.jpg";
import JS from "./assets/js.jpg";
import Course from "./course/Course";

function CourseList() {
  const [courselist, setCourse] = useState([
    {
      id: 1,
      name: "HTML",
      price: 199,
      rating: 9,
      image: HTML,
    },
    {
      id: 2,
      name: "CSS",
      price: 199,
      rating: 9,
      image: CSS,
    },
    {
      id: 3,
      name: "JS",
      price: 499,
      rating: 9,
      image: JS,
    },
  ]);

  function handleDelete(id) {
    const newCourses = courselist.filter((item) => item.id != id);
    setCourse(newCourses);
  }
  
  //if use ,[] empty array useEffect will call only once when we starting the web app 
  useEffect(()=>{
    console.log('useEffect Activated')
  },[])

  // if set [any state] inside the list then it work only for that particular state variable
  useEffect(()=>{
    console.log('useEffect Activated')
  },[courselist])
 // if does not provide the second variable then it going work for all state changeb edh
  useEffect(()=>{
    console.log('useEffect Activated')
  })
  const course = courselist.map((item, index) => (
    <Course
      key={index}
      id={item.id}
      name={item.name}
      price={item.price}
      image={item.image}
      fn={handleDelete}
    />
  ));
  return <div>{course}</div>;
}

export default CourseList;
