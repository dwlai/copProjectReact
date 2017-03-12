import React from 'react';

export default class Post extends React.Component{



		render(){


			return(
					<div className="posted">
					
						<div className="postHeader">
							    <p className = "postDate">Posted Date: {this.props.date}</p>
								<p className = "postFirstName">Post from: {this.props.posterFirstName}</p>
								<p className = "reportNumber">Report #: {this.props.reportNumber}</p>
						</div>
						<div className="postBody">
							<p className="postMessage">{this.props.postMessage}</p>
						</div>
					</div>


				)


		}



}