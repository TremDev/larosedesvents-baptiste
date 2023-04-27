import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { tabs } = props;
  return (
    <header>
      <nav>
        <ul>
          {tabs?.map((o, idx) => (
            <li key={`links-tab_${idx}`}>
              <Link to={o?.href}>{o?.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
