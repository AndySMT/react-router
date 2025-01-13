import { Link, NavLink } from "react-router-dom";
const navMenu = [
  {
    path: "/",
    labet: "Home",
  },
  {
    path: "/books",
    labet: "Books",
  },
  {
    path: "/contact",
    labet: "Contact",
  },
  {
    path: "/about",
    labet: "About",
  },
];
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {navMenu.map((item) => (
              <li className="nav-item" key={item.path}>
                <NavLink
                  className="nav-link"
                  to={item.path}
                  end
                  style={({ isActive }) => ({
                    color: isActive ? "blue" : "black",
                  })}
                >
                  {item.labet}
                </NavLink>
              </li>
            ))}
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/books">
                Books
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
