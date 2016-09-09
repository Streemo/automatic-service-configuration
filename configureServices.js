import { Meteor } from "meteor/meteor";
import { ServiceConfiguration } from "meteor/service-configuration";

const oauth = Meteor.settings.OAUTH;
const coll = ServiceConfiguration.configurations;

Meteor.startup(()=>{
	for (let service in oauth){
		const data = oauth[service];
		data.loginStyle = data.loginStyle || "popup";
		coll.upsert({service}, {$set:data})
	}
})