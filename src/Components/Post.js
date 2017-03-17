import React from 'react';

export default class Post extends React.Component{



		render(){


			return(
					<div className="posted">
					
						<div className="postHeader">
							    <p className = "postDate">Posted Date: {this.props.Date}</p>
								<p className = "postFirstName">Post from: {this.props.PosterFirstName}</p>
								<p className = "reportNumber">Report #: {this.props.ReportNumber}</p>
						</div>
						<div className="postBody">
							<p className="postMessage">{this.props.PostMessage}</p>
						</div>
					</div>


				)


		}



}