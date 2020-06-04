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

		let email = document.getElementById("inputEmail").value;
		let password = document.getElementById("inputPassword").value;
		let firstName = document.getElementById("inputFirstName").value;
		let lastName = document.getElementById("inputLastName").value;
		let contact = document.getElementById("inputContact").value;
		let user = new User(email, password, firstName, lastName, Number(contact));

		console.log(user);
	}
}