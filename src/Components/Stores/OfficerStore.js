import { EventEmitter } from "events";

class OfficerStore extends EventEmitter{

	constructor(){

		super();
		this.officers = [

						{
							
							userId: "1",
							orgId: "1",
							unit: "Traffic services",
							badge: "11098",
							officerRank:"Police Constable",
							firstName:"Zachary",
							lastName:"Lobsinger",
							email:"b11098@torontopolice.on.ca"

						},
							{
							userId: "2",
							orgId: "1",
							unit: "52 Division",
							badge: "5383",
							officerRank:"Police Constable",
							firstName:"Bernie",
							lastName:"Gill",
							email:"b5383@torontopolice.on.ca"

							}
			
		]
	}

	getOfficers(){
		
		return this.officers;
	}


}

const officerStore = new OfficerStore();

export default officerStore;