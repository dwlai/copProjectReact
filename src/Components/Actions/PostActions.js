import dispatcher from "../Dispatcher";
export function createPost(posterFirstName, reportNumber, posterLastName, email, postMessage, userId){
	dispatcher.dispatch({
	type: "CREATE_POST",
	posterFirstName : posterFirstName,
	reportNumber : reportNumber,
	posterLastName : posterLastName,
	email: email,
	postMessage: postMessage,
	userId: userId
});
}