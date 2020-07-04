import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import Logo from "../Logo";
import { NavLink } from "react-router-dom";
import HeaderMai from "../style/Header/HeaderMain";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";

import Search from "../Search";

import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
const HeaderMain = (props) => {
  const [active, setActive] = useState(false);

  const userSelect = () => {
    setActive(!active);
  };
  return (
    <HeaderMai>
      <div>
        <div>
          <NavLink
            className="link-logo"
            activeClassName="active-logo"
            exact
            to="/"
          >
            <Logo />
          </NavLink>
        </div>
        <div className="search">
          <Search />
        </div>
        <div className="infor">
          {props.isAuth ? (
            <div className="user-icon" onClick={userSelect}>
              <PermIdentityIcon />
              <div className={active ? "active user-box" : "user-box"}>
                <NavLink
                  className="nav-link"
                  activeClassName="activeRoute"
                  exact
                  to="/user"
                >
                  User
                </NavLink>
                
                <NavLink
                  className="nav-link"
                  activeClassName="activeRoute"
                  exact
                  to="/logout"
                >
                  Logout
                </NavLink>
              </div>
            </div>
          ) : (
            <NavLink
              className="nav-link"
              activeClassName="activeRoute"
              exact
              to="/siginsignup"
            >
              Login / Register
            </NavLink>
          )}

          <NavLink
            className="nav-link"
            activeClassName="activeRoute"
            exact
            to="/user/favorite"
          >
            {" "}
            <FavoriteBorderOutlinedIcon />
          </NavLink>

          <NavLink
            className="nav-link"
            activeClassName="activeRoute"
            exact
            to="/user/carts"
          >
            {" "}
            <LocalMallOutlinedIcon />
          </NavLink>
        </div>
      </div>
    </HeaderMai>
  );
};

HeaderMain.propTypes = {
  isAuth: PropTypes.bool,
};

export default HeaderMain;
