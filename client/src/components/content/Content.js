import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { Routes ,Route } from 'react-router-dom';
import Vaches from "../Vaches/Vaches";
import Topbar from "./Topbar";

const Content = ({ sidebarIsOpen, toggleSidebar }) => (
  <Container
    fluid
    className={classNames("content", { "is-open": sidebarIsOpen })}
  >
    <Topbar toggleSidebar={toggleSidebar} />
    <Routes>
      <Route exact path="/" component={() => "Hello"} />
      <Route exact path="/vaches" element={<Vaches />} />
      <Route exact path="/Pages" component={() => "Pages"} />
      <Route exact path="/faq" component={() => "FAQ"} />
      <Route exact path="/contact" component={() => "Contact"} />
     
    </Routes>
  </Container>
);

export default Content;
