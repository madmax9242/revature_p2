// This class represents a bucket list item
export class Event {

	name: string
	description: string;
	date: string;
	type: string;
	email: string; // foreign key that'll associate users with events
}