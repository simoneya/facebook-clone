import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';


function Header() {
  return (
    <div className="header">
        <div className="header__left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" alt= ""/>
            <div className="header__input">
                <SearchIcon />
                <input type="text"/>
            </div>
        </div>
        <div className="header__main"></div>
        <div className="header__right"></div>
    </div>
  )
}

export default Header;