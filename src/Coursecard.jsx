import React from "react";

function CourseCard({ course, toggleEnroll }) {
  return (
    <>
    <div style={{ border: "1px solid wheat",backgroundColor:"wheat",color:"black", padding: "30px", margin: "10px",borderRadius:"10px" ,width:"400px"}}>
      <h2>{course.courseName}</h2>

      <p>
        Status: {course.enrolled ? "Enrolled" : "Not Enrolled"}
      </p>

      <button onClick={toggleEnroll} style={{backgroundColor: "red"}}>
        {course.enrolled ? "Unenroll" : "Enroll"}
      </button>
    </div>
</>
  );
}

export default CourseCard;
