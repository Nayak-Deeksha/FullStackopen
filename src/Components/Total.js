import React from "react";
const Total = ({ exercises }) => {
    const total = exercises.reduce((a, b) => a + b)
    return <p><b>Total of {total} exercises</b></p>
}
export default Total;