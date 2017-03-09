import { EventEmitter } from "events";

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
							postMessage:"Good Job Zach!",
							date:"2017-03-01 18:00:00"

						},
							{
							postId : "2",
							userId: "1",
							posterFirstName: "John",
							posterLastName: "Harry",
							email:"harry@harry.com",
							reportNumber:"1042234",
							postMessage:"Good Job Zach!",
							date:"2017-03-01 18:00:00"

						},
							{
							postId : "3",
							userId: "1",
							posterFirstName: "John",
							posterLastName: "Harry",
							email:"harry@harry.com",
							reportNumber:"1042234",
							postMessage:"Good Job Zach!",
							date:"2017-03-01 18:00:00"

						},	{
							postId : "4",
							userId: "2",
							posterFirstName: "Allen",
							posterLastName: "Iverson",
							email:"harry@harry.com",
							reportNumber:"1042234",
							postMessage:"Good Job Bernieasdfadsfasdfadsfsadfasdfasdfsadfasdf!",
							date:"2017-03-01 18:00:00"

						},
						{
							postId : "5",
							userId: "2",
							posterFirstName: "Robert",
							posterLastName: "Horry",
							email:"harry@harry.com",
							reportNumber:"1042234",
							postMessage:"Good Job Bernie!",
							date:"2017-03-01 18:00:00"

						},
						{
							postId : "6",
							userId: "2",
							posterFirstName: "Ray",
							posterLastName: "Jay",
							email:"harry@harry.com",
							reportNumber:"1042234",
							postMessage:"Good Job Bernie!",
							date:"2017-03-01 18:00:00"

						}
		]
	}

	getPosts(){
		
		return this.posts;
	}


}

const postStore = new PostStore();

export default postStore;