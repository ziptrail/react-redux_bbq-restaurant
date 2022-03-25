import React, { useEffect, useState } from "react";
import "./styles.css";
import bannerImg from "./banner.png";
import Logo from "../../common/Logo";
import MenuItem from "../../common/Menu/MenuItem";

const Banner = ({
  handleScrollMenu,
  categories,
  activeCategory,
  filterItems,
}) => {
  return (
    <header>
      <div className="header-content">
        <Logo />
        <div className="content-main">
          <h1>Вкусная еда для ваших пристрастий</h1>
          <p>Мы готовим свежие и полезные блюда по вкусным рецептам!</p>
          <button onClick={handleScrollMenu}>
            Посмотреть меню <i className="fas fa-long-arrow-alt-right"></i>
          </button>
        </div>
      </div>
      <img className="header-img" src={bannerImg} alt="banner" />
      <div className="btn-container">
        {categories.map((category, index) => {
          return (
            <button
              type="button"
              key={index}
              className={`${
                activeCategory === category ? "filter-btn active" : "filter-btn"
              }`}
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
    </header>
  );
};

export default Banner;
