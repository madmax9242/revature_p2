export class Event {

	userEmail: string; // FK to associate events with their users
	eventID: number;
	eventName: string
	eventDescription: string;
	eventLocation: string;
	dateTime: string;
	eventType: string;

	constructor(userEmail: string, eventID: number, eventName: string, eventDescription: string, eventLocation: string, dateTime: string, eventType: string) {
		this.userEmail = userEmail;
		this.eventID = eventID;
		this.eventName = eventName;
		this.eventDescription = eventDescription;
		this.eventLocation = eventLocation;
		this.dateTime = dateTime;
		this.eventType = eventType;
	}
}
