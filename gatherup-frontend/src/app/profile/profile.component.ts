import { Component, OnInit } from '@angular/core';

import { User } from '../class/user/user';
import { ConfigService } from '../service/config.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	user: User;

	sessionKey: string;

	constructor(private router: Router, private configService: ConfigService) {
	}

	ngOnInit(): void {
		// Grabs key from current session
		this.sessionKey = sessionStorage.getItem("email");
		console.log("Current sessionKey: " + this.sessionKey);

		// Validates if key exists and routes accordingly
		if (this.sessionKey == null) {
			window.location.assign("/login");
		} else {
			this.configService.getUserByEmail(this.sessionKey).subscribe(data => this.user = data);
		}
	}

	logOut() {
		console.log("--- logOut() button clicked ---");

		// Removes all saved data from session
		let sessionKey = sessionStorage.getItem("email");
		console.log("sessionKey: " + sessionKey);
		sessionStorage.clear();

		// Tests if key still remains
		let clearedKey = sessionStorage.getItem("email");
		console.log("clearedKey: " + clearedKey);

		// Routes
		window.location.assign("/login")
	}
}
