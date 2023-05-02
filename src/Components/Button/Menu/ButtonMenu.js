import React from "react";
import './index.css'

const ButtonMenu = (props) => {
  const { onClick = () => {}, label = "Button" } = props;
  return (
    <button id={"ButtonMenu"} className='btn' onClick={() => onClick()}>
      <span>{label}</span>
    </button>
  );
};

export default ButtonMenu;
