import React from "react";
import { Link, useLocation } from "react-router-dom";

const SideNav = () => {
  const location = useLocation();

  const isActiveLink = (path) => {
    return location.pathname === path ? "active" : "";
  };

  const updateClass = () => {
    const dynamicClass = 'layout-menu-expanded';
    document.documentElement.classList.remove(dynamicClass);
  };

  return (
    <>
      <aside
        id="layout-menu"
        className="layout-menu menu-vertical menu bg-menu-theme"
      >
        <div className="app-brand demo">
          <a href="index.html" className="app-brand-link">
            <span className="app-brand-text demo menu-text fw-bolder ms-2">
              Sneat
            </span>
          </a>
          <a
            type="button"
            onClick={updateClass}
            href="#"
            className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
          >
            <i className="bx bx-chevron-left bx-sm align-middle"></i>
          </a>
        </div>

        <div className="menu-inner-shadow"></div>

        <ul className="menu-inner py-1">
          <li className={`menu-item ${isActiveLink("/")}`}>
            <Link to={"/"} className="menu-link">
              <i className="menu-icon tf-icons bx bx-home-circle"></i>
              <div data-i18n="Home">Home</div>
            </Link>
          </li>

          <li className="menu-header small text-uppercase">
            <span className="menu-header-text">Pages</span>
          </li>

          <li className={`menu-item ${isActiveLink("/products")}`}>
            <Link to={"/products"} className="menu-link">
              <i className="menu-icon tf-icons bx bx-dock-top"></i>
              <div data-i18n="Products">Products</div>
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default SideNav;
