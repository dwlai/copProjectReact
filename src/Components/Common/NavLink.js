import React from 'react';
import { Link } from 'react-router';

export default class MyComponent extends React.Component 
{
  render() {
    let title = this.props.title ? this.props.title : this.props.text;
    return (
      <Link {...this.props} activeClassName="active" title={title}>
        <span className="text">{this.props.text}</span>
      </Link>
    );
  }
}
