import React from "react";
import "./menu-item.styles.scss";
import { useNavigate, useLocation } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    const newUrl = `${location.pathname}${linkUrl}`;
    navigate(newUrl);
  };

  return (
    <div className={`${size} menu-item`} onClick={handleClick}>
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="background-image"
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
