import { useNavigate } from "react-router-dom";

function NotFound() {

  const navigate = useNavigate();

  const pageStyle = {
    textAlign: "center",
    marginTop: "100px"
  };

  const btnStyle = {
    padding: "10px 20px",
    backgroundColor: "#222",
    color: "white",
    border: "none",
    cursor: "pointer",
    marginTop: "20px"
  };

  return (
    <div style={pageStyle}>
      <h1>404 – Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>

      <button
        style={btnStyle}
        onClick={() => navigate("/")}
      >
        Go Home
      </button>
    </div>
  );
}

export default NotFound;
