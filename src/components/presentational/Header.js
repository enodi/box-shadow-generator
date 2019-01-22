import React from "react";
import { Link } from "react-router-dom";

import SubHeader from "./SubHeader";

const Header = () => (
  <div>
    <header className="header">
      <div className="header__content">
        <Link className="header__title" to="/">
          <h1>CSS Generator</h1>
        </Link>
      </div>
    </header>
    <SubHeader />
  </div>
);

export default Header;
