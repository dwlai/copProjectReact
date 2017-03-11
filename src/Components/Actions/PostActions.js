import dispatcher from "../Dispatcher";
export function createPost(){
	dispatcher.dispatch({
	type: "CREATE_POST"
});
}