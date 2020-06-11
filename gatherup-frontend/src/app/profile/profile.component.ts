import { Component, OnInit } from '@angular/core';

import { User } from '../class/user/user';
import { ConfigService } from '../service/config.service';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	users: User[];

	constructor(private configService: ConfigService) {
	}

	ngOnInit(): void {
		// Upon initialization, extracts USERS from endpoint and inserts into user array
		this.configService.getAllUsers().subscribe(data => { this.users = data; });
	}

	logOut() {
		console.log("logOut() button clicked.");

		// Removes all saved data from sessionStoragae
		console.log("Removing session..");
		let storageData = sessionStorage.getItem("email");
		console.log("Current stored email: " + storageData);
		sessionStorage.removeItem("email");
		sessionStorage.clear();
	}
}
