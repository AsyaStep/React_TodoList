import React from "react";
import "./style.scss";

function Header({ children }) {
  return (
    <>
      <header className="header">
        <div>{children}</div>
      </header>
    </>
  );
}
export default Header;
