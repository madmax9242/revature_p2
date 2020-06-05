import { Component, OnInit } from '@angular/core';
import { User } from '../class/user/user'; // imports our User class

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

	// Dummy user obj thats assigned email/password via two-way binding; used PURELY FOR VALIDATION
	user: any = {};

	onSubmit() {
		console.log("Register submit button pressed.");

		let email = (<HTMLInputElement>document.getElementById("inputEmail")).value;
		let password = (<HTMLInputElement>document.getElementById("inputPassword")).value;
		let firstName = (<HTMLInputElement>document.getElementById("inputFirstName")).value;
		let lastName = (<HTMLInputElement>document.getElementById("inputLastName")).value;
		let contact = (<HTMLInputElement>document.getElementById("inputContact")).value;
		this.user = new User(email, password, firstName, lastName, Number(contact));

		// Sanity check
		console.log(this.user);

		// TODO: do things with this constructed user object; use Angular's HttpClient to send to server.
	}
}