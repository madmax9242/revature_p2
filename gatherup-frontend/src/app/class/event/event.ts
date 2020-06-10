export class Event {

	userEmail: string; // FK to associate events with their users
	eventID: number;
	eventName: string
	eventType: string;
	eventLocation: string;
	dateTime: string;
	eventDescription: string;

	constructor(userEmail: string, eventID: number, eventName: string, eventType: string, eventLocation: string, dateTime: string, eventDescription: string) {
		this.userEmail = userEmail;
		this.eventID = eventID;
		this.eventName = eventName;
		this.eventType = eventType;
		this.eventLocation = eventLocation;
		this.dateTime = dateTime;
		this.eventDescription = eventDescription;
	}
}
