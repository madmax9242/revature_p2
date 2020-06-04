import { Component, OnInit } from '@angular/core';

import { User } from "../class/user/user"; // imports our User class

/* 
	This component maps input values to a user object and passes it to Java
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

	onSubmit() {
		console.log("Register submit button pressed.");

		let email = (<HTMLInputElement>document.getElementById("inputEmail")).value;
		let password = (<HTMLInputElement>document.getElementById("inputPasswrod")).value;
		let firstName = (<HTMLInputElement>document.getElementById("inputFirstName")).value;
		let lastName = (<HTMLInputElement>document.getElementById("inputLastName")).value;
		let contact = (<HTMLInputElement>document.getElementById("inputContact")).value;
		
		let user = new User(email, password, firstName, lastName, Number(contact));

		console.log(user);
	}
}