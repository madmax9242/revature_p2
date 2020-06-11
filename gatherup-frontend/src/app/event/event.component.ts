import { Component, OnInit } from '@angular/core';

import { Event } from '../class/event/event';
import { EventService } from '../service/event.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
	selector: 'app-event',
	templateUrl: './event.component.html',
	styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

	event: Event;

	constructor(private router: Router, private eventService: EventService) {
		this.event = new Event(undefined, undefined, undefined, undefined, undefined, undefined, undefined);
	}

	ngOnInit(): void {
	}

	// CREATE
	createEvent() {
		console.log("create() clicked.");

		// Constructs an event object based on input values
		let eventName = (<HTMLInputElement>document.getElementById("inputEventName")).value;
		let eventDescription = (<HTMLInputElement>document.getElementById("inputEventDescription")).value;
		let eventLocation = (<HTMLInputElement>document.getElementById("inputEventLocation")).value;
		let dateTime = (<HTMLInputElement>document.getElementById("inputDateTime")).value;
		let eventType = (<HTMLInputElement>document.getElementById("inputEventType")).value;
		this.event = new Event(undefined, undefined, eventName, eventDescription, eventLocation, dateTime, eventType);

		// Sanity check
		console.log(this.event);

		// POSTs event to endpoint and assigns to a local event object to be displayed
		this.eventService.createEvent(this.event).subscribe(data => this.router.navigate(["/eventview"]));
	}
}
