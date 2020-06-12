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

	constructor(private router: Router, private configService: ConfigService) {
	}

	ngOnInit(): void {
		// Automatically grabs key from sessionStorage
		let sessionKey = sessionStorage.getItem("email");
		console.log("Current sessionKey: " + sessionKey);

		// Extracts user from endpoint and assigns to local object
		this.configService.getUserByEmail(sessionKey).subscribe(data => this.user = data);
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
		this.router.navigate(["/login"]);
	}
}

// SESSIONSTORAGE
// // Save data to sessionStorage
// sessionStorage.setItem('key', 'value');

// // Get saved data from sessionStorage
// let data = sessionStorage.getItem('key');

// // Remove saved data from sessionStorage
// sessionStorage.removeItem('key');

// // Remove all saved data from sessionStorage
// sessionStorage.clear();