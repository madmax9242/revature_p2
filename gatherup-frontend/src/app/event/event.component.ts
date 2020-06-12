import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Event } from '../class/event/event';
import { ConfigService } from '../service/config.service';
import { EventService } from '../service/event.service';

@Component({
	selector: 'app-event',
	templateUrl: './event.component.html',
	styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

	event: Event;

	sessionKey: string;

	constructor(private router: Router, private configService: ConfigService, private eventService: EventService) {
		this.event = new Event(undefined, undefined, undefined, undefined, undefined, undefined, undefined);
	}

	ngOnInit(): void {
		// Grabs key from current session
		this.sessionKey = sessionStorage.getItem("email");
		console.log("Current sessionKey: " + this.sessionKey);

		// Validates if key exists and routes accordingly
		if (this.sessionKey == null) {
			window.location.assign("/login");
		}
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
		this.event = new Event(sessionStorage.getItem("email"), undefined, eventName, eventDescription, eventLocation, dateTime, eventType);

		// Sanity check
		console.log(this.event);

		// POSTs event to endpoint and routes to event view
		this.eventService.createEvent(this.event).subscribe(data => this.router.navigate(["/eventview"]));
	}
}
