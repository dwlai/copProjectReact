import React from 'react';
import NavLink from './NavLink';
import {Link} from 'react-router';
import $ from 'jquery';

export default class MyComponent extends React.Component 
{
  render() {
   
    
   
    return (

      <nav id="mainNav" className="navbar navbar-default navbar-fixed-top">
        <div className="container">

          <div className="navbar-header">
              <Link to="/" id="brandNavLink" className="navbar-brand">Those who protect</Link>
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
          </div>

          <div id="navbar" className="navbar-collapse collapse">
            <div className="nav navbar-nav navbar-right">
              <NavLink to={"/"} text="Home" title="Home Page" className="navLink" />
            </div>
          </div>

        </div>
      </nav>

      );
  }
}
