import { EventEmitter } from "events";
import dispatcher from "../Dispatcher";

class OfficerStore extends EventEmitter{

	constructor(){

		super();
		this.officer = {}
	}

	getOfficer(){
		
		return this.officer;
	}

	setData(data){
		
		this.officer = data;
		this.emit("changeOfficer");
	}


	handleActions(action){

		switch(action.type){
			case "FETCH_OFFICER_DATA":
			this.setData(action.data);
		}


	}


}

const officerStore = new OfficerStore();
dispatcher.register(officerStore.handleActions.bind(officerStore));
export default officerStore;