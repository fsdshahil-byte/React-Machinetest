import { NavLink } from "react-router-dom";

function Navbar() {

  const navStyle = {
    backgroundColor: "#222",
    padding: "15px 25px",
    display: "flex",
    gap: "25px",
    alignItems: "center",
    width: "100%",
    boxSizing: "border-box",
    position : "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1000
  };

  const linkStyle = {
    textDecoration: "none",
    color: "white",
    fontWeight: "bold",
    fontSize: "16px"
  };

  const activeStyle = {
    color: "red",
 
  };

  return (
    <nav style={navStyle}>

      <NavLink
        to="/"
        style={({ isActive }) =>
          isActive ? { ...linkStyle, ...activeStyle } : linkStyle
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/employees"
        style={({ isActive }) =>
          isActive ? { ...linkStyle, ...activeStyle } : linkStyle
        }
      >
        Employees
      </NavLink>

      <NavLink
        to="/about"
        style={({ isActive }) =>
          isActive ? { ...linkStyle, ...activeStyle } : linkStyle
        }
      >
        About
      </NavLink>

    </nav>
  );
}

export default Navbar;
