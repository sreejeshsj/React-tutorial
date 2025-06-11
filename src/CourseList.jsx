import React, { useEffect, useState } from "react";

import Course from "./course/Course";

function CourseList() {
  const [courselist, setCourse] = useState(null);

  function handleDelete(id) {
    const newCourses = courselist.filter((item) => item.id != id);
    setCourse(newCourses);
  }
  
  //if use ,[] empty array useEffect will call only once when we starting the web app 
  useEffect(()=>{
    fetch('http://localhost:3000/courses')
    .then(response=>{
      console.log(response)
      return response.json()
    }).then(data=>{setCourse(data)})
  },[])

  // if set [any state] inside the list then it work only for that particular state variable
  // useEffect(()=>{
  //   console.log('useEffect Activated')
  // },[courselist])
 // if does not provide the second variable then it going work for all state changeb edh
  // useEffect(()=>{
  //   console.log('useEffect Activated')
  // })
  if (!courselist){
    return (<></>)
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
