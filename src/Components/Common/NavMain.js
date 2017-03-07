import React from 'react';
import NavLink from './NavLink';
import {Link} from 'react-router';
import $ from 'jquery';

export default class MyComponent extends React.Component 
{
  render() {
    let ui = (
      <div>
        <NavLink to={""} text="Home" title="Home Page" />
        <NavLink to={"contact"} text="Contact" title="Contact Page" />
        <NavLink to={"about"} text="About" title="About Page" />
      </div>
    );
    return ui;
  }
}
