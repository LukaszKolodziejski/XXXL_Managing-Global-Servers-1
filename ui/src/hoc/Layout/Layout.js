import React from "react";
import "./css/Layout.css";

const Layout = (props) => {
  return (
    <div className="Layout">
      <header className="Layout__header">Recruitment task</header>
      {props.children}
      <footer className="Layout__footer"></footer>
    </div>
  );
};

export default Layout;
