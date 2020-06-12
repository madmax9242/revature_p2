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

	user: User;
	tempUser: User;

	constructor(private router: Router, private configService: ConfigService, private encryptionService: PasswordEncryptionService) {
		this.user = new User(undefined, undefined, undefined, undefined, undefined, undefined);
	}

	ngOnInit(): void {
	}

	register() {
		console.log("--- register() button pressed ---");

		// Sanity check
		console.log("TO BACKEND: ");
		console.log(this.user);

		// NO VALIDATION METHOD (WORKS)
		this.configService.createUser(this.user).subscribe(data => this.router.navigate(["/profile"]));

		// // VALIDATION METHOD (NOT WORKING)
		// this.configService.createUser(this.user).subscribe(data => this.tempUser = data);
		// console.log("FROM DATABASE: ");
		// console.log(this.tempUser);

		// // Checks response object
		// if (this.tempUser != null) {
		// 	console.log("Successful login.");

		// 	// Saves data (email) to a session
		// 	sessionStorage.setItem("email", this.tempUser.email);
		// 	let sessionKey = sessionStorage.getItem("email");
		// 	console.log("Stored key: " + sessionKey);

		// 	// Route
		// 	this.router.navigate(["/profile"]);
		// } else {
		// 	console.log("Failed login.");
		// 	alert("Invalid credentials!");
		// }
	}
}

// // Constructs a user object based on input values; NOT NEEDED ANYMORE B/C TWO-WAY BINDING
// let email = (<HTMLInputElement>document.getElementById("inputEmail")).value;
// let password = (<HTMLInputElement>document.getElementById("inputPassword")).value;
// let firstName = (<HTMLInputElement>document.getElementById("inputFirstName")).value;
// let lastName = (<HTMLInputElement>document.getElementById("inputLastName")).value;
// let contact = (<HTMLInputElement>document.getElementById("inputContact")).value;
// this.user = new User(undefined, email, password, firstName, lastName, contact);

// POSTs user to endpoint and assigns to a local user object
// this.service.createUser(this.user).subscribe(data => { this.user = data });