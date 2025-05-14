import React from "react";

function NavbarButton(props) {
  return (
    <div>
      <a className = "text" href = {props.link}>{props.title}</a>
    </div>
  );
}

export default NavbarButton;