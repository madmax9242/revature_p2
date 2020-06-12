import { Component, OnInit } from '@angular/core';
import { EventService } from '../service/event.service';
import { Router } from '@angular/router';

import { Event } from '../class/event/event';

@Component({
	selector: 'app-eventview',
	templateUrl: './eventview.component.html',
	styleUrls: ['./eventview.component.css']
})
export class EventviewComponent implements OnInit {

	event: Event;
	events: Event[] = [];

	tempID: any;
	tempArray: Event[];

	eventID: string;

	constructor(private eventService: EventService) {
		this.event = new Event(undefined, undefined, undefined, undefined, undefined, undefined, undefined);
	}

	ngOnInit(): void {
		this.eventService.getAllEvents().subscribe(data => {
			console.log("ALL EVENTS FROM DATABASE: ");
			for (let i in data) {
				console.log(data[i]);
				if (data[i].userEmail == sessionStorage.getItem("email")) {
					this.events.push(data[i]);
				}
			}
		})
	}

	isHidden = false;
	deleteEvent(index: number) {
		// Note: be careful ordering things around in here; may break method

		console.log("test() clicked.");

		// Assigns to local variable and passes it as an argument to backend
		this.tempID = this.events[index].eventID;
		console.log("Current index's eventID: " + this.events[index].eventID);
		this.eventService.deleteEventById(this.tempID).subscribe(data => this.event = data)

		// Removes from local array (to hide from user immediately)
		this.events.splice(index, 1);
	}
}

// isHidden = false;
// deleteEvent(index: number) {
// 	// Note: be careful ordering things around in here; may break method

// 	console.log("test() clicked.");

// 	// Assigns to local variable and passes it as an argument to backend
// 	this.tempID = this.events[index].eventID;
// 	console.log("Current index's eventID: " + this.events[index].eventID);
// 	this.eventService.deleteEventById(this.tempID).subscribe(data => { this.event = data; })

// 	// Removes from local array (to hide from user)
// 	this.events.splice(index, 1);
// }