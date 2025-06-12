import React, { useEffect, useState } from "react";

import Course from "./course/Course";
import useFetch from "./useFetch";

function CourseList() {
  const [courselist, error, setData] = useFetch(
    "http://localhost:3000/courses"
  );

  function handleDelete(id) {
    const newCourses = courselist.filter((item) => item.id != id);
    setData(newCourses);
  }

  if (!courselist) {
    return error ? (
      <p>{error}</p>
    ) : (
      <img src="data/assets/22.gif" alt="loading" />
    );
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
