import { Component, OnInit } from '@angular/core';
import { User } from '../class/user/user'; // imports our User class

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	constructor() {
	}

	ngOnInit(): void {
	}

	// Dummy user obj thats assigned email/password via two-way binding; used PURELY FOR VALIDATION
	user: any = {};

	onSubmit() {
		console.log("Login submit button pressed.");

		let email = (<HTMLInputElement>document.getElementById("inputEmail")).value;
		let password = (<HTMLInputElement>document.getElementById("inputPassword")).value;
		this.user = new User(email, password, null, null, 0);

		// Sanity check
		console.log(this.user);

		// Validates against hard-coded credentials
		if (email == "hello@world.com" && password == "p4ssw0rd") {
			alert('Login success!\n\n' + JSON.stringify(this.user, null, 4));
			location.href = "/profile"; // routes accordingly
		} else {
			alert("Invalid credentials!")
		}
	}
}