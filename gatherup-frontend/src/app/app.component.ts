import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';

import { ConfigService } from './service/config.service';
import { EventService } from './service/event.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	title: 'GatherUp';
	subTitle: 'Not a Meetup Clone';

	sessionKey: string;

	constructor(private router: Router, private loggy: NGXLogger, private configService: ConfigService, private eventService: EventService) {
	}

	ngOnInit() {
		this.sessionKey = sessionStorage.getItem("email");
		this.loggy.info("AppComponent sessionKey: " + this.sessionKey);
	}

	logOut() {
		this.loggy.info("--- logOut() button clicked ---");

		// Removes all saved data from session
		let sessionKey = sessionStorage.getItem("email");
		this.loggy.info("sessionKey: " + sessionKey);
		sessionStorage.clear();

		// Tests if key still remains
		let clearedKey = sessionStorage.getItem("email");
		this.loggy.info("clearedKey: " + clearedKey);

		// Routes
		window.location.assign("/login");
	}
}
