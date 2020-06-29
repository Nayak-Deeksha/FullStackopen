import React from "react";
import Header from "./Header";
import Total from "./Total";
import Content from "./Content"

const Course = ({ courses }) => {
    return courses.map((course) => (<div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total exercises={course.parts.map(part => part.exercises)} />
    </div>))
}
export default Course;
