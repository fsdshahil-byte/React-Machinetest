import { useState } from "react";
import "./App.css";
import Coursecard from "./Coursecard"; 
function App() {
  const [courses, setCourses] = useState([
    {
      courseName: "React",
      enrolled: false,
    },
    {
      courseName: "Node.js",
      enrolled: false,
    },
  ]);

  const toggleEnroll = (index) => {
    setCourses(
      courses.map((course, i) =>
        i === index
          ? { ...course, enrolled: !course.enrolled }
          : course
      )
    );
  };

  return (
    <div>
      <h1>Courses</h1>

      {courses.map((course, index) => (
        <Coursecard
          key={index}
          course={course}
          toggleEnroll={() => toggleEnroll(index)}
        />
      ))}
    </div>
  );
}

export default App;
