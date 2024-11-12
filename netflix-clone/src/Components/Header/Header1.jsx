import React from 'react'
import "./header.css";
import NetflixLogo from "../../assets/Images/NetflixLogo.png"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';
import Header1Link from './Header1Link';

const Header1 = () => {
  return (
    <div className='header_outer_container'>
        <div className='header_container'>
            <div className='header_left'>
                <ul className='Header07'>
                    <Header1Link linkName="/" name={<img src={NetflixLogo} alt="Netflix Logo" width="100"/>}/>
                    <Header1Link linkName="Home" name="Home" />
                    <Header1Link linkName="TVShow" name="TVShow" />
                    <Header1Link linkName="Movies" name="Movies" />
                    <Header1Link linkName="Latest" name="Latest" />
                    <Header1Link linkName="MyList" name="MyList" />
                    <Header1Link linkName="Browse by Languages" name="Browse by Languages" />
                </ul>
            </div>
            {/* <div className='header_right'>
                <ul>
                    <Header1Link linkName="SearchIcon" name="SearchIcon" />
                    <Header1Link linkName="NotificationsNoneIcon" name="NotificationsNoneIcon" />
                    <Header1Link linkName="AccountBoxIcon" name="AccountBoxIcon" />
                    <Header1Link linkName="ArrowDropDownIcon" name="ArrowDropDownIcon" />
                </ul>
            </div> */}
            <div className='header_right'>
                <ul>
                    <li><SearchIcon /></li>
                    <li><NotificationsNoneIcon /></li>
                    <li><AccountBoxIcon /></li>
                    <li><ArrowDropDownIcon /></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header1