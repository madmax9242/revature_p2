import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../service/config.service';
import { Event } from '../class/event/event';

@Component({
	selector: 'app-event',
	templateUrl: './event.component.html',
	styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

	event: Event;

	constructor(private service: ConfigService) {
		this.event = new Event(undefined, undefined, undefined, undefined, undefined, undefined, undefined);
	}

	ngOnInit(): void {
	}

	/*
		@Everyone, the fields being saved to an event object are:
			eventName: string
			eventDescription: string
			eventLocation: string
			dateTime: string
			eventType: string
		I know we have more fields for events, but a user wouldn't need to interact with them.
		We can manually utilize the extraneous variables for associations on the server side, or something.
	*/

	addEvent() {
		console.log("addEvent() button pressed.");

		// Constructs an event object based on input values
		let eventName = (<HTMLInputElement>document.getElementById("inputEventName")).value;
		let eventDescription = (<HTMLInputElement>document.getElementById("inputEventDescription")).value;
		let eventLocation = (<HTMLInputElement>document.getElementById("inputEventLocation")).value;
		let dateTime = (<HTMLInputElement>document.getElementById("inputDateTime")).value;
		let eventType = (<HTMLInputElement>document.getElementById("inputEventType")).value;
		this.event = new Event(undefined, undefined, eventName, eventType, eventLocation, dateTime, eventDescription);

		// Sanity check
		console.log(this.event);

		// TODO: POST constructed event to endpoint (via an EventService service that's yet to be created)
	}

	displayEvents() {
		console.log("displayEvents() button clicked.");
		// TODO: dynamically display events in tabular format or something
	}
}
