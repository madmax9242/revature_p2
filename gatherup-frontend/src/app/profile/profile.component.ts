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
	users: User[];

	constructor(private router: Router, private configService: ConfigService) {
	}

	ngOnInit(): void {
		// Upon initialization, extracts users from endpoint and inserts into user array
		// this.configService.getAllUsers().subscribe(data => { this.users = data; });

		let sessionKeyValue = sessionStorage.getItem("email");
		console.log("Stored key: " + sessionKeyValue);
		this.configService.getUserByEmail(sessionKeyValue).subscribe(data => { this.user = data; });

		// TODO: GET request to backend using saved email; take that object and use it to populate profile
	}

	logOut() {
		console.log("logOut() button clicked.");

		// Removes all saved data from session
		let sessionKey = sessionStorage.getItem("email");
		console.log("Stored key: " + sessionKey);
		sessionStorage.clear();

		// Tests if key still remains
		let clearedKey = sessionStorage.getItem("email");
		console.log("Key after clearing: " + clearedKey);

		// Routes
		this.router.navigate(["/"]);
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