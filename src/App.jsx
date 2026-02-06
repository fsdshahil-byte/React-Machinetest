import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
// import Coursecard from "./Coursecard"; 
import Navbar from "./Navbar";
import Home from "./Home";
import Employees from "./Employees";
import EmployeeDetails from "./Edetails";
import About from "./About";
import NotFound from "./NotFound";
function App() {
  // const [courses, setCourses] = useState([
  //   {
  //     courseName: "React",
  //     enrolled: false,
  //   },
  //   {
  //     courseName: "Node.js",
  //     enrolled: false,
  //   },
  // ]);

  // const toggleEnroll = (index) => {
  //   setCourses(
  //     courses.map((course, i) =>
  //       i === index
  //         ? { ...course, enrolled: !course.enrolled }
  //         : course
  //     )
  //   );
  // };

  return (
    // <div>
    //   <h1>Courses</h1>

    //   {courses.map((course, index) => (
    //     <Coursecard
    //       key={index}
    //       course={course}
    //       toggleEnroll={() => toggleEnroll(index)}
    //     />
    //   ))}
    // </div>
    <div>
      <>
     <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/employee-details" element={<EmployeeDetails />} />
        <Route path="/about" element={<About />} />
 <Route path="*" element={<NotFound />} />
      </Routes>
    </>
    </div>
  );
}

export default App;
