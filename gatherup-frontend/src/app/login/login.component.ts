import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';

import { User } from '../class/user/user';
import { ConfigService } from '../service/config.service';
import { PasswordEncryptionService } from '../service/password-encryption.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	user: User = new User(undefined, undefined, undefined, undefined, undefined, undefined);

	constructor(private router: Router, private loggy: NGXLogger, private configService: ConfigService, private encryptionService: PasswordEncryptionService) {
	}

	ngOnInit(): void {
	}

	login() {
		this.loggy.info("--- login() button pressed ---");

		// Constructs a user object based on input values
		let email = (<HTMLInputElement>document.getElementById("inputEmail")).value;
		let password = (<HTMLInputElement>document.getElementById("inputPassword")).value;
		let user: User = new User(undefined, email, this.encryptionService.encrypt(password), undefined, undefined, undefined);

		// Sanity check
		this.loggy.info("SENDING USER TO BACKEND: ");
		this.loggy.info(user);

		// Validates and routes accordingly
		this.configService.login(user).subscribe(data => {
			this.loggy.info("USER FROM DATABASE: ");
			this.loggy.info(data);
			if (data != null) {
				this.loggy.info("Successful login.");

				// Saves data (email) to a session
				sessionStorage.setItem("email", email);
				let sessionKey = sessionStorage.getItem("email");
				this.loggy.info("Stored key: " + sessionKey);

				// Route
				window.location.assign("/eventview")
			} else {
				this.loggy.error("Failed login.");
				alert("Invalid credentials!");
			}
		});
	}
}

// // Constructs a user object based on input values
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

// Optional error handling
// this.configService.login(this.user).subscribe({
// 	next: data => this.user = data,
// 	error: error => console.log("Error: ", error)
// });