import { Component, OnInit } from '@angular/core';
import { User } from '../class/user/user';

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

	user = new User(null, null, null, null, null);

	onSubmit() {
		let email = (<HTMLInputElement>document.getElementById("inputEmail")).value;
		let password = (<HTMLInputElement>document.getElementById("inputPassword")).value;
		let user = new User(email, password, null, null, null);

		if (user.email == "hello@world.com" && user.password == "p4ssw0rd") {
			console.log("Login success.");
			window.location.href = "/profile";
		} else {
			console.log("Invalid credentials.");
			window.location.href = "https://www.google.com";
		}
		console.log(user);
	}
}