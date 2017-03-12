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
							email:"zach@zach.com"

						},
							{
							userId: "2",
							orgId: "1",
							unit: "52 Division",
							badge: "5383",
							officerRank:"Police Constable",
							firstName:"Bernie",
							lastName:"Gill",
							email:"bernie@bernie.com"

						}
			
		]
	}

	getOfficers(){
		
		return this.officers;
	}


}

const officerStore = new OfficerStore();

export default officerStore;