import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';

import { User } from '../class/user/user';
import { ConfigService } from '../service/config.service';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	user: User;

	sessionKey: string;

	constructor(private router: Router, private loggy: NGXLogger, private configService: ConfigService) {
	}

	ngOnInit(): void {
		// Grabs key from current session
		this.sessionKey = sessionStorage.getItem("email");
		this.loggy.info("Current sessionKey: " + this.sessionKey);

		// Validates if key exists and routes accordingly
		if (this.sessionKey == null) {
			window.location.assign("/login");
		} else {
			this.configService.getUserByEmail(this.sessionKey).subscribe(data => this.user = data);
		}
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
		window.location.assign("/login")
	}
}
