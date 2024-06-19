import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';


const Header = ({setSidebar, photoURL}) => {
  return (
    <div className='header'>
        
        <div className='header__logo'>
            <button onClick={() => setSidebar(prev => prev === false ? true : false)} ><MenuIcon /></button>
            <img src='https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo.png' alt='Google Drive' />
            <span>Drive</span>
        </div>
        <div className='header__search'>
            <SearchIcon />
            <input type='text' placeholder='Search in Drive' />
            <FormatAlignCenterIcon />
        </div>
        <div className='header__icons'>
            <span className='headerIcons'>
                <HelpOutlineOutlinedIcon />
                <SettingsIcon />
                <AppsIcon />
            </span>
            <span>
                <Avatar src={photoURL} />
            </span>
        </div>
    </div>
  )
}

export default Header