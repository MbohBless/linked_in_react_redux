import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import HeaderOption from "./HeaderOption";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationIcon from "@material-ui/icons/Notifications";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./Firebase_fl";
function Header() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://cdn3.iconfinder.com/data/icons/material-design-social-icons/152/Linkedin_icon-512.png"
          alt=""
        />
        <img src="" alt="" />
        <div className="header_search">
          <SearchIcon />
          <input placeholder="search" type="test" />
        </div>
      </div>
      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title="Home"></HeaderOption>
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationIcon} title="Notification" />
        {user == null ? (
          <div></div>
        ) : (
          <HeaderOption
            avatar="https://thumbs.dreamstime.com/b/vecteur-eps-d-ensemble-ic%C3%B4ne-de-compte-ic-ne-web-signe-profil-utilisateur-avec-le-glyph-coche-illustration-autoris%C3%A9e-par-l-ment-144708832.jpg"
            title={user.displayName}
            onClick={logoutOfApp}
          />
        )}
      </div>
    </div>
  );
}

export default Header;
