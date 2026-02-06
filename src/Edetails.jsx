import { useLocation, useNavigate } from "react-router-dom";

function Edetails() {

  const location = useLocation();
  const navigate = useNavigate();

  const employee = location.state;

  if (!employee) {
    return <h3>No Employee Data</h3>;
  }

  return (
    <div>
      <h2>Employee Details</h2>

      <p>ID: {employee.id}</p>
      <p>Name: {employee.name}</p>
      <p>Role: {employee.role}</p>

      <button onClick={() => navigate("/employees")}>
        Back to Employees
      </button>

      <button onClick={() => navigate("/")}>
        Go Home
      </button>
    </div>
  );
}

export default Edetails;
