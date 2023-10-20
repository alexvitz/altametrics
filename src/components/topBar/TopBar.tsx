import {
  faBars,
  faBell,
  faCircleUser,
  faGear,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";

const TopBar = () => {
  const location = useLocation();

  const path =
    location.pathname.substring(1).charAt(0).toUpperCase() +
    location.pathname.substring(2);

  return (
    <div className="topBarContainer">
      <FontAwesomeIcon icon={faBars} size="lg" />
      <div className="topBarTextContainer">
        <span className="topBarSecondaryText">Accounting / </span> {path}
      </div>
      <div className="rightIcons">
        <FontAwesomeIcon icon={faBell} size="lg" />
        <FontAwesomeIcon icon={faGear} size="lg" />
        <FontAwesomeIcon icon={faSun} size="lg" />
      </div>
      <FontAwesomeIcon icon={faCircleUser} size="2xl" />
    </div>
  );
};

export default TopBar;
