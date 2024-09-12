import React from "react";

import { Container, Row, Button } from "reactstrap";
import { NavLink, Link } from "reactstrap";
import logo from "../../assets/images/logo.png";

const nav__links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "#",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            {/*  ================LOGO ================== */}
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            {/*  ================LOGO end================== */}

            {/*  ================menu start================== */}
              <div className="navigation">
                <ul className="menu d-flex align-items-center gap-5">
                  
                </ul>
              </div>
            {/*  ================menu end================== */}
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
