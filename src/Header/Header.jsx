import { GiHamburgerMenu } from "react-icons/gi";
import "./Header.css";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="main-header">
          <span>
            <GiHamburgerMenu />
          </span>
          <p className="logo">epicurious</p>
          <p className="subscribe">SUBSCRIBE</p>
        </div>
        <div className="search-bar">
          <span>
            <CiSearch className="search-icon" />
          </span>
          <input type="text" placeholder="Search for `pasta`" />
        </div>
      </div>
    </>
  );
};

export default Header;
