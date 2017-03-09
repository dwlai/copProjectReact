import React from 'react';

export default class Post extends React.Component{



		render(){


			return(
					<div className="post">
					
						<div classNme="postHeader">
							<p className = "postFirstName">Post from:{this.props.posterFirstName}</p>
							<p className = "reportNumber">Report #:{this.props.reportNumber}</p>
							<p className = "postDate">Date: {this.props.date}</p>
						</div>
						<div className="postBody">
							<p className="postMessage">{this.props.postMessage}</p>
						</div>


					</div>


				)


		}



}