import "../../styles/Header.css";

import GDriveLogo from "../../media/google-drive-logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";

const Index = ({ userPhoto }) => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={GDriveLogo} alt="" />
        <span>Drive</span>
      </div>
      <div className="header__searchContainer">
        <div className="header__searchBar">
          <SearchIcon />
          <input type="text" placeholder="Search in drive" />
          <ExpandMoreIcon />
        </div>
      </div>
      <div className="header__icons">
        <span>
          <HelpOutlineOutlinedIcon />
          <SettingsIcon />
        </span>
        <AppsIcon />
        <img src={userPhoto} alt="User photo" />
      </div>
    </div>
  );
};

export default Index;
