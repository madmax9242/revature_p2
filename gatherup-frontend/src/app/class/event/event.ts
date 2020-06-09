// This class represents a bucket list item
export class Event {

	eventID: number;
	userEmail: string; // FK to associate events with their users
	eventName: string
	eventType: string;
	eventLocation: string;
	dateTime: Date;
	eventDescription: string;
}
