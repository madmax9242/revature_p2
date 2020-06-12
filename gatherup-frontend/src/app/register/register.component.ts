import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../class/user/user';
import { ConfigService } from '../service/config.service';
import { PasswordEncryptionService } from '../service/password-encryption.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	user: User = new User(0, "", "", "", "", "");

	constructor(private router: Router, private configService: ConfigService, private encryptionService: PasswordEncryptionService) {
	}

	ngOnInit(): void {
	}

	register() {
		console.log("--- register() button pressed ---");

		// Constructs a user object based on input values
		let email = (<HTMLInputElement>document.getElementById("inputEmail")).value;
		let password = (<HTMLInputElement>document.getElementById("inputPassword")).value;
		let firstName = (<HTMLInputElement>document.getElementById("inputFirstName")).value;
		let lastName = (<HTMLInputElement>document.getElementById("inputLastName")).value;
		let contact = (<HTMLInputElement>document.getElementById("inputContact")).value;
		let user: User = new User(undefined, email, password, firstName, lastName, contact);

		// Sanity check
		console.log("SENDING USER TO BACKEND: ");
		console.log(user);

		// Validates and route accordingly
		this.configService.createUser(user).subscribe(data => {
			console.log("USER FROM DATABASE: ");
			console.log(data);
			if (data != null) {
				console.log("Registration success.");

				// Saves data (email) to a session
				sessionStorage.setItem("email", email);
				let sessionKey = sessionStorage.getItem("email");
				console.log("Stored key: " + sessionKey);

				// Route
				window.location.assign("/profile")
			} else {
				console.log("Registration failed.");
				alert("Registration failed!");
			}
		});
	}
}

// // Constructs a user object based on input values; NOT NEEDED ANYMORE B/C TWO-WAY BINDING
// let email = (<HTMLInputElement>document.getElementById("inputEmail")).value;
// let password = (<HTMLInputElement>document.getElementById("inputPassword")).value;
// let firstName = (<HTMLInputElement>document.getElementById("inputFirstName")).value;
// let lastName = (<HTMLInputElement>document.getElementById("inputLastName")).value;
// let contact = (<HTMLInputElement>document.getElementById("inputContact")).value;
// this.user = new User(undefined, email, password, firstName, lastName, contact);