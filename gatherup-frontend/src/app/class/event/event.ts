// This class represents an event item
export class Event {

	name: string
	description: string;
	date: string;
	type: string;
	email: string; // foreign key that'll associate each user with events
}