import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <div className="nav-container">
        <div className="nav-row">
          <ul className="nav-list">
            <li className="nav-logo">
              <img
                className="nav-logo-img"
                src={"/public/BrandonBuhrLogo.png"}
                alt="Logo"
              />
            </li>
            <div className="nav-center">
              <Link to="/about">
                <li className="nav-item">About</li>
              </Link>
              <Link to="/projects">
                <li className="nav-item">Projects</li>
              </Link>
              <Link to="/contact">
                <li className="nav-item">Contact</li>
              </Link>
            </div>
            <li className="nav-toggle">Toggle</li>
          </ul>
        </div>
      </div>
    </>
  );
}
