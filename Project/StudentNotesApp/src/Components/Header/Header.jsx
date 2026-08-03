import "./Header.css";
import { FaGraduationCap } from "react-icons/fa";

function Header() {
  return (
    <div className="header">
      <div className="header-icon">
        <FaGraduationCap />
      </div>

      <h1>Student Notes App</h1>

      <p>
        Quickly capture and persist your
        <br />
        study notes locally.
      </p>
    </div>
  );
}

export default Header;