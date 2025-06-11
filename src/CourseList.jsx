import React, { useEffect, useState } from "react";

import Course from "./course/Course";

function CourseList() {
  const [courselist, setCourse] = useState(null);
  const [error,setError] = useState(null)
  function handleDelete(id) {
    const newCourses = courselist.filter((item) => item.id != id);
    setCourse(newCourses);
  }
  
  //if use ,[] empty array useEffect will call only once when we starting the web app 
  useEffect(()=>{
    fetch('http://localhost:3000/ourses')
    .then(response=>{
      console.log(response)
      if (!response.ok){
        throw Error("Couldn't retrive data")
      }
      return response.json()
    }).then(data=>{setCourse(data)}).catch((error)=>{
      console.log(error.message)
      setError(error.message)
    })
  },[])

  if (!courselist){
  return <h2>{error}</h2>;
}

 
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
