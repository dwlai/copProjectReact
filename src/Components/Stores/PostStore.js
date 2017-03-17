import { EventEmitter } from "events";
import dispatcher from "../Dispatcher";

class PostStore extends EventEmitter{

	constructor(){

		super();
		this.posts = []
	}

	setData(data){

		this.posts = data;
		this.emit("changePost");
	}

	getPosts(){
		
		return this.posts;
	}

	handleActions(action){

		switch(action.type){
			case "CREATE_POST":
				this.createPost(action.userId, action.posterFirstName,action.reportNumber,action.posterLastName, action.email, action.postMessage);
				break;
			case "FETCH_POST_DATA":
				this.setData(action.data);
			}
	}

	


}

const postStore = new PostStore();
dispatcher.register(postStore.handleActions.bind(postStore));
export default postStore;