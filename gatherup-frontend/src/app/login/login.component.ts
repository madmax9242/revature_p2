import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../class/user/user';
import { ConfigService } from '../service/config.service';
import { PasswordEncryptionService } from '../service/password-encryption.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	user: User;
	tempUser: User;

	constructor(private router: Router, private configService: ConfigService, private encryptionService: PasswordEncryptionService) {
		this.user = new User(undefined, undefined, undefined, undefined, undefined, undefined);
	}

	ngOnInit(): void {
	}

	login() {
		console.log("--- login() button pressed ---");

		// Sanity check
		console.log("TO BACKEND: ");
		console.log(this.user);

		// NO VALIDATION METHOD (WORKS)
		this.configService.login(this.user).subscribe(data => this.router.navigate(["/eventview"]));

		// // VALIDATION METHOD (NOT WORKING)
		// this.configService.login(this.user).subscribe(data => this.tempUser = data);
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
		// 	this.router.navigate(["/eventview"]);
		// } else {
		// 	console.log("Failed login.");
		// 	alert("Invalid credentials!");
		// }
	}
}

// // Constructs a user object based on input values; NOT NEEDED ANYMORE B/C TWO-WAY BINDING
// let email = (<HTMLInputElement>document.getElementById("inputEmail")).value;
// let password = (<HTMLInputElement>document.getElementById("inputPassword")).value;
// this.user.email = email;
// this.user.password = password;

// // Validates against hard-coded credentials
// if (this.user.email == "hello@world.com" && this.user.password == "p4ssw0rd") {
// 	alert('Login success!\n\n' + JSON.stringify(this.user, null, 4));
// 	location.href = "/profile"; // routes accordingly
// } else {
// 	alert("Invalid credentials!")
// }

// // Sends user object to backend AND routes to event view
// this.configService.login(this.user).subscribe(data => this.router.navigate(["/eventview"]));

// // Optional error handling
// this.configService.login(this.user).subscribe({
// 	next: data => this.tempUser = data,
// 	error: error => console.log("Error: ", error)
// });