import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <p className="sidebarTitle">Menu</p>
      <button className="btns">Home</button>
      <button className="btns">
        <FontAwesomeIcon
          icon={faChevronRight}
          size="xs"
          style={{ color: "#000000" }}
        />
        Dashboards
      </button>
      <button
        onClick={() => {
          navigate("/invoices");
        }}
        className="btns"
      >
        <FontAwesomeIcon
          icon={faChevronRight}
          size="xs"
          style={{ color: "#000000" }}
        />
        Invoices
      </button>
      <button
        onClick={() => {
          navigate("/bills");
        }}
        className="btns"
      >
        <FontAwesomeIcon
          icon={faChevronRight}
          size="xs"
          style={{ color: "#000000" }}
        />
        Bills
      </button>
      <button className="btns">
        <FontAwesomeIcon
          icon={faChevronRight}
          size="xs"
          style={{ color: "#000000" }}
        />
        Expenses
      </button>
      <button className="btns">
        <FontAwesomeIcon
          icon={faChevronRight}
          size="xs"
          style={{ color: "#000000" }}
        />
        Reports
      </button>
      <button className="btns">
        <FontAwesomeIcon
          icon={faChevronRight}
          size="xs"
          style={{ color: "#000000" }}
        />
        Accounting
      </button>
    </div>
  );
};

export default Sidebar;
