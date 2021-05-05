import React from 'react';
//assets
import logo from '../images/ig-logo.png';
import searchIcon from '../images/search-icon.png';
import Menu from '../Menu/Menu';
//styles
import './navigation.scss';


const Navigation = () => {
   return (
        <div className="navigation">
            <div className="container">
                <img className='logo' src={logo} alt="instagram logo" />
                <div className="search">
                    <img className="searchIcon" src={searchIcon} alt="search icon" />
                    <span className="searchText">Search</span>
                </div>

                <Menu />
            </div>
        </div>  
    )
}

export default Navigation;