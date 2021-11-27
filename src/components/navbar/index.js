import { useWebContext } from "../../context/WebContext";
import "./style.css";
const Navbar = () => {
  const { pageview, setPageview } = useWebContext();

  return (
    <nav className="navbar">
      <div className="search">
        <i className="fas fa-search"></i>
        <input type="text" placeholder="Search..." />
      </div>
      <div className="nav-center">
        <div
          onClick={() => setPageview(true)}
          className={`nav-item ${pageview ? "active" : ""}`}
        >
          <p>Inbox</p>
        </div>
        <div
          onClick={() => setPageview(false)}
          className={`nav-item ${pageview ? "" : "active"}`}
        >
          <p>Calendar</p>
        </div>
      </div>
      <div className="nav-icon">
        <i className="fas fa-pen"></i>
      </div>
    </nav>
  );
};

export default Navbar;
