import { EventEmitter } from "events";
import dispatcher from "../Dispatcher";

class PostStore extends EventEmitter{

	constructor(){

		super();
		this.posts = []
	}

	createPost(userId, posterFirstName, reportNumber, posterLastName, email, postMessage){
		const id = Date.now();
		var date = new Date().toISOString().slice(0, 19).replace('T', ' ');

		this.posts.push({

							PostID : id,
							UserId: userId,
							PosterFirstName: posterFirstName,
							PosterLastName: posterLastName,
							Email: email,
							ReportNumber: reportNumber,
							PostMessage: postMessage,
							Date: date
						});
		this.emit("change");
	}

	setData(data){

		this.posts = data;
		this.emit("change");
	}

	getPosts(){
		
		return this.posts;
	}

	handleActions(action){

		switch(action.type){
			case "CREATE_POST":
				this.createPost(action.userId, action.posterFirstName,action.reportNumber,action.posterLastName, action.email, action.postMessage);
				break;
			case "FETCH_DATA":
				this.setData(action.data);
			}
	}

	


}

const postStore = new PostStore();
dispatcher.register(postStore.handleActions.bind(postStore));
export default postStore;