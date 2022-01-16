import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="logo"
      />

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon"/>
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello, Nhân</span>
          <span className="header__optionLineTwo">Sign in</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Return</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
