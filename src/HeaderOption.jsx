import { Avatar } from "@material-ui/core";
import React from "react";
import "./HeaderOption.css";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";

function HeaderOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption_icon" />}
      {avatar && (
        <Avatar className="headerOption_icon">
          {user.email[0].toUpperCase()}
        </Avatar>
      )}

      <h3 className="headerOption_title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
