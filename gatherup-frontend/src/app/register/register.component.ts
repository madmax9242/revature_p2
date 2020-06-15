import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';

import { User } from '../class/user/user';
import { ConfigService } from '../service/config.service';
import { PasswordEncryptionService } from '../service/password-encryption.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	user: User = new User(undefined, undefined, undefined, undefined, undefined, undefined);

	constructor(private router: Router, private loggy: NGXLogger, private configService: ConfigService, private encryptionService: PasswordEncryptionService) {
		// TESTING NGXLOGGER MESSAGES
		// this.loggy.trace("w0w a TRACE message.");
		// this.loggy.debug("w0w a DEBUG message.");
		// this.loggy.info("w0w an INFO message.");
		// this.loggy.log("w0w a LOG message.");
		// this.loggy.warn("w0w a WARN message.");
		// this.loggy.error("w0w an ERROR message.");
		// this.loggy.fatal("w0w a FATAL message.");
	}

	ngOnInit(): void {
	}

	register() {
		this.loggy.info("--- register() button pressed ---");

		// Constructs a user object based on input values
		let email = (<HTMLInputElement>document.getElementById("inputEmail")).value;
		let password = (<HTMLInputElement>document.getElementById("inputPassword")).value;
		let firstName = (<HTMLInputElement>document.getElementById("inputFirstName")).value;
		let lastName = (<HTMLInputElement>document.getElementById("inputLastName")).value;
		let contact = (<HTMLInputElement>document.getElementById("inputContact")).value;
		let user: User = new User(undefined, email, this.encryptionService.encrypt(password), firstName, lastName, contact);

		// Sanity check
		this.loggy.info("SENDING USER TO BACKEND: ");
		this.loggy.info(user);

		// Validates and routes accordingly
		this.configService.createUser(user).subscribe(data => {
			this.loggy.info("USER FROM DATABASE: ");
			this.loggy.info(data);
			if (data != null) {
				this.loggy.info("Registration success.");

				// Saves data (email) to a session
				sessionStorage.setItem("email", email);
				let sessionKey = sessionStorage.getItem("email");
				this.loggy.info("Stored key: " + sessionKey);

				// Route
				window.location.assign("/profile")
			} else {
				this.loggy.error("Registration failed.");
				alert("User already exists. Try logging in instead?");
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