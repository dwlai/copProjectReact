import { EventEmitter } from "events";
import dispatcher from "../Dispatcher";

class PostStore extends EventEmitter{

	constructor(){

		super();
		this.posts = [

						{
							postId : "1",
							userId: "1",
							posterFirstName: "John",
							posterLastName: "Harry",
							email:"harry@harry.com",
							reportNumber:"1042234",
							postMessage:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit eros a magna tincidunt bibendum. Cras nec nunc nisi. Etiam ultricies sapien est. Nullam malesuada orci sed eros pulvinar efficitur. Sed sed convallis massa. Nullam gravida in libero at bibendum. Aenean viverra ac est in ultrices. Ut venenatis ac erat quis tempor. Nulla vestibulum pulvinar porttitor. ",
							date:"2017-03-01 18:00:00"

						},
							{
							postId : "2",
							userId: "1",
							posterFirstName: "John",
							posterLastName: "Harry",
							email:"harry@harry.com",
							reportNumber:"1042234",
							postMessage:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit eros a magna tincidunt bibendum. Cras nec nunc nisi. Etiam ultricies sapien est. Nullam malesuada orci sed eros pulvinar efficitur. Sed sed convallis massa. Nullam gravida in libero at bibendum. Aenean viverra ac est in ultrices. Ut venenatis ac erat quis tempor. Nulla vestibulum pulvinar porttitor. Suspendisse interdum ex ac massa venenatis, quis suscipit eros consectetur. Vestibulum a urna id nisl elementum vulputate. Suspendisse velit eros, pulvinar ut suscipit a, scelerisque in libero. Vivamus eget lacus nec tellus consequat consequat. Etiam gravida nunc quis pellentesque efficitur. Nulla ligula sem, vulputate",
							date:"2017-03-01 18:00:00"

						},
							{
							postId : "3",
							userId: "1",
							posterFirstName: "John",
							posterLastName: "Harry",
							email:"harry@harry.com",
							reportNumber:"1042234",
							postMessage:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit eros a magna tincidunt bibendum. Cras nec nunc nisi. Etiam ultricies sapien est. Nullam malesuada orci sed eros pulvinar efficitur. Sed sed convallis massa. Nullam gravida in libero at bibendum. Aenean viverra ac est in ultrices. Ut venenatis ac erat quis tempor. Nulla vestibulum pulvinar porttitor. Suspendisse interdum ex ac massa venenatis, quis suscipit eros consectetur. Vestibulum a urna id nisl elementum vulputate. Suspendisse velit eros, pulvinar ut suscipit a, scelerisque in libero. Vivamus eget lacus nec tellus consequat consequat. Etiam gravida nunc quis pellentesque efficitur. Nulla ligula sem, vulputate",
							date:"2017-03-01 18:00:00"

						},	{
							postId : "4",
							userId: "2",
							posterFirstName: "Allen",
							posterLastName: "Iverson",
							email:"harry@harry.com",
							reportNumber:"1042234",
							postMessage:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit eros a magna tincidunt bibendum. Cras nec nunc nisi. Etiam ultricies sapien est. Nullam malesuada orci sed eros pulvinar efficitur. Sed sed convallis massa. Nullam gravida in libero at bibendum. Aenean viverra ac est in ultrices. Ut venenatis ac erat quis tempor. Nulla vestibulum pulvinar porttitor. Suspendisse interdum ex ac massa venenatis, quis suscipit eros consectetur. Vestibulum a urna id nisl elementum vulputate. Suspendisse velit eros, pulvinar ut suscipit a, scelerisque in libero. Vivamus eget lacus nec tellus consequat consequat. Etiam gravida nunc quis pellentesque efficitur. Nulla ligula sem, vulputate",
							date:"2017-03-01 18:00:00"

						},
						{
							postId : "5",
							userId: "2",
							posterFirstName: "Robert",
							posterLastName: "Horry",
							email:"harry@harry.com",
							reportNumber:"1042234",
							postMessage:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit eros a magna tincidunt bibendum. Cras nec nunc nisi. Etiam ultricies sapien est. Nullam malesuada orci sed eros pulvinar efficitur. Sed sed convallis massa. Nullam gravida in libero at bibendum. Aenean viverra ac est in ultrices. Ut venenatis ac erat quis tempor. Nulla vestibulum pulvinar porttitor. Suspendisse interdum ex ac massa venenatis, quis suscipit eros consectetur. Vestibulum a urna id nisl elementum vulputate. Suspendisse velit eros, pulvinar ut suscipit a, scelerisque in libero. Vivamus eget lacus nec tellus consequat consequat. Etiam gravida nunc quis pellentesque efficitur. Nulla ligula sem, vulputate",
							date:"2017-03-01 18:00:00"

						},
						{
							postId : "6",
							userId: "2",
							posterFirstName: "Ray",
							posterLastName: "Jay",
							email:"harry@harry.com",
							reportNumber:"1042234",
							postMessage:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit eros a magna tincidunt bibendum. Cras nec nunc nisi. Etiam ultricies sapien est. Nullam malesuada orci sed eros pulvinar efficitur. Sed sed convallis massa. Nullam gravida in libero at bibendum. Aenean viverra ac est in ultrices. Ut venenatis ac erat quis tempor. Nulla vestibulum pulvinar porttitor. Suspendisse interdum ex ac massa venenatis, quis suscipit eros consectetur. Vestibulum a urna id nisl elementum vulputate. Suspendisse velit eros, pulvinar ut suscipit a, scelerisque in libero. Vivamus eget lacus nec tellus consequat consequat. Etiam gravida nunc quis pellentesque efficitur. Nulla ligula sem, vulputate",
							date:"2017-03-01 18:00:00"

						}
		]
	}

	createPost(userId, posterFirstName, reportNumber, posterLastName, email, postMessage){
		const id = Date.now();
		var date = new Date().toISOString().slice(0, 19).replace('T', ' ');

		this.posts.push({

							postId : id,
							userId: userId,
							posterFirstName: posterFirstName,
							posterLastName: posterLastName,
							email: email,
							reportNumber: reportNumber,
							postMessage: postMessage,
							date: date
						});
		this.emit("change");
	}

	getPosts(){
		
		return this.posts;
	}

	handleActions(action){

		switch(action.type){
			case "CREATE_POST":{
				this.createPost(action.userId, action.posterFirstName,action.reportNumber,action.posterLastName, action.email, action.postMessage);
			}
		}

	}


}

const postStore = new PostStore();
dispatcher.register(postStore.handleActions.bind(postStore));
window.dispatcher = dispatcher;
export default postStore;