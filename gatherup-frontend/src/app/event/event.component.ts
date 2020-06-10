import { Component, OnInit } from '@angular/core';

import { Event } from '../class/event/event';
import { EventService } from '../service/event.service';

@Component({
	selector: 'app-event',
	templateUrl: './event.component.html',
	styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

	event: Event;
	events: Event[];

	constructor(private eventService: EventService) {
		this.event = new Event(undefined, undefined, undefined, undefined, undefined, undefined, undefined);
	}

	ngOnInit(): void {
		// Upon initialization, extracts events from endpoint and inserts into events array
		this.eventService.getAllEvents().subscribe(data => { this.events = data; });
	}

	/*
		@Everyone, the fields being saved to an event object are:
			eventName: string
			eventDescription: string
			eventLocation: string
			dateTime: string
			eventType: string
		I know we have more fields for events, but a user wouldn't need to interact with them.
		We can manually utilize those extraneous variables for associations on the server side, or something.
	*/

	addEvent() {
		console.log("addEvent() button pressed.");

		// Constructs an event object based on input values
		let eventName = (<HTMLInputElement>document.getElementById("inputEventName")).value;
		let eventDescription = (<HTMLInputElement>document.getElementById("inputEventDescription")).value;
		let eventLocation = (<HTMLInputElement>document.getElementById("inputEventLocation")).value;
		let dateTime = (<HTMLInputElement>document.getElementById("inputDateTime")).value;
		let eventType = (<HTMLInputElement>document.getElementById("inputEventType")).value;
		this.event = new Event(undefined, undefined, eventName, eventDescription, eventLocation, dateTime, eventType);

		// Sanity check
		console.log(this.event);

		// POSTs event to endpoint and assigns to a local event object
		this.eventService.createEvent(this.event).subscribe(data => this.event = data);
	}
}
