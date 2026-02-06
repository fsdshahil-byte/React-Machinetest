import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to Employee Directory</h1>

      <button onClick={() => navigate("/employees")}>
        Go to Employees
      </button>
    </div>
  );
}

export default Home;
