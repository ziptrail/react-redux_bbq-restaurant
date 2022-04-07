import React from "react";
import { connect, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { createStructuredSelector } from "reselect";
import { selectCartItemsCount } from "../../../redux/cart/cart.selector";
import "./styles.css";

const ButtonCartCount = () => {
  const { cartCount } = useSelector(
    createStructuredSelector({
      cartCount: selectCartItemsCount,
    })
  );
  const navigate = useNavigate();
  return (
    <div className="btnCartCount" onClick={() => navigate("/cart")}>
      <div className="count">{cartCount >= 100 ? "99+" : cartCount}</div>
      <i className="fas fa-shopping-cart"></i>
    </div>
  );
};

export default ButtonCartCount;
