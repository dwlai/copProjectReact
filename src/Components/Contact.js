import React from 'react';
import $ from 'jquery';
export default class MyComponent extends React.Component 
{
	constructor(){
			super();
			this.state ={
								
						};
		}


  render() {
  	console.log(this);
    let ui = (
      <div>Contact us page</div>	  

	);
	return ui;
  }
}
