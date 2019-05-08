import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class Nav extends Component {
  componentDidMount() {
    document.querySelector("html").classList = "";
  }

  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/clock">02 - JS and CSS Clock</Link>
          </li>
          <li>
            <Link to="/flex-panel-gallery">05 - Flex Panel Gallery</Link>
          </li>
        </ul>
      </nav>
    );
  }
}