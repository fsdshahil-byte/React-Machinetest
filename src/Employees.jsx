import { useNavigate } from "react-router-dom";

function Employees() {

  const navigate = useNavigate();

  const employees = [
    { id: 201, name: "Anu", role: "Developer" },
    { id: 202, name: "Rahul", role: "Tester" },
    { id: 203, name: "Ameen", role: "Designer" }
  ];

  return (
    <div>
      <h2>Employees List</h2>

      {employees.map((emp) => (
        <div key={emp.id}>
          <h3>{emp.name}</h3>
          <p>{emp.role}</p>

          <button
            onClick={() =>
              navigate("/employee-details", { state: emp })
            }
          >
            View Details
          </button>
        </div>
      ))}
    </div>
  );
}

export default Employees;
