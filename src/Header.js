import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar, IconButton } from '@mui/material';


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
        <div className="header__main">
            <div className="header__option">
                 <HomeIcon fontSize="large" />
            </div>
            <div className="header__option">
                 <FlagIcon fontSize="large" />
            </div>
            <div className="header__option">
                 <SubscriptionsOutlinedIcon fontSize="large" />
            </div>
            <div className="header__option">
                 <StorefrontOutlinedIcon fontSize="large" />
            </div>
            <div className="header__option">
                 <SupervisedUserCircleOutlinedIcon fontSize="large" />
            </div>
        </div>
        <div className="header__right">
            <div className="header__info">
                <Avatar />
                <h4>Simona Ya</h4>
            </div>
            <IconButton>
                <AddIcon />
            </IconButton>
            <IconButton>
                <ForumIcon />
            </IconButton>
            <IconButton>
                <NotificationsActiveIcon />
            </IconButton>
            <IconButton>
                <ExpandMoreIcon />
            </IconButton>
        </div>
    </div>
  )
}

export default Header;