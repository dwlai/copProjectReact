import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import $ from 'jquery';
import NavMain from './Common/NavMain';

require('es6-promise').polyfill();

export default class MyComponent extends React.Component 
{
  render() {
    return (
    <div>
      <NavMain />
        {React.cloneElement(this.props.children, {
          key: location.pathname
        })}
    </div>
    )
  }
}
