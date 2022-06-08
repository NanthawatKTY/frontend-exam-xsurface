import React from "react";
import './AppHeader.css';
import { NavLink } from "react-router-dom";

const AppHeader = () => {
    function getNavClass(navLinkProps) {
        let navClass = 'app-header-item';
        if (navLinkProps.isActive) navClass += ' app-header-item-active';
        return navClass;
      }
    
      return (
        <header className="app-header">
          <NavLink className={getNavClass} to="/" end>Homepage</NavLink>
          <NavLink className={getNavClass} to="store">Store</NavLink>
          <NavLink className={getNavClass} to="mac">Mac</NavLink>
          <NavLink className={getNavClass} to="ipad">iPad</NavLink>
          <NavLink className={getNavClass} to="iphone">iPhone</NavLink>
          <NavLink className={getNavClass} to="watch">Watch</NavLink>
          <NavLink className={getNavClass} to="airpods">AirPods</NavLink>
          <NavLink className={getNavClass} to="tv_home">TV & Home</NavLink>
          <NavLink className={getNavClass} to="only_on_apple">Only on Apple</NavLink>
          <NavLink className={getNavClass} to="accessories">Accessories</NavLink>
          <NavLink className={getNavClass} to="support">Support</NavLink>
        </header>
      );      
}

export default AppHeader;