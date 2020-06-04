import { Component, OnInit } from '@angular/core';

import { User } from "../class/user/user"; // imports our User class

/* 
	This component maps input values to a JavaScript object and passes it to Java via Angular's HttpClient
*/
@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	constructor() {
	}

	ngOnInit(): void {
	}

	// Angular yells if you remove this..
	user = new User(null, null, null, null, null);

	onSubmit() {
		console.log("Register submit button pressed.");

		let email: any = (<HTMLInputElement>document.getElementById("inputEmail")).value;
		let password: any = (<HTMLInputElement>document.getElementById("inputPassword")).value;
		let firstName: any = (<HTMLInputElement>document.getElementById("inputFirstName")).value;
		let lastName: any = (<HTMLInputElement>document.getElementById("inputLastName")).value;
		let contact: any = (<HTMLInputElement>document.getElementById("inputContact")).value;
		let user = new User(email, password, firstName, lastName, Number(contact));

		if (user.email == "hello@world.com" && user.password == "p4ssw0rd") {
			window.location.href = "/profile";
		} else {
			window.location.href = "https://www.google.com";
		}
		console.log(user);
	}
}