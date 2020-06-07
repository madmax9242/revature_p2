import { Component, OnInit } from '@angular/core';
import { User } from '../class/user/user';
import { ConfigService } from '../service/config.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	// For login()
	user: User;

	constructor(private service: ConfigService, private router: Router) {
		// this.user = new User(null, null, null, null, null);
	}

	ngOnInit(): void {
	}

	login() {
		console.log("Login button pressed.");

		// Constructs a user object to validate credentials
		let email = (<HTMLInputElement>document.getElementById("inputEmail")).value;
		let password = (<HTMLInputElement>document.getElementById("inputPassword")).value;
		this.user = new User(email, password, undefined, undefined, undefined);

		// Sanity check
		console.log(this.user);

		// Validates against hard-coded credentials
		if (email == "hello@world.com" && password == "p4ssw0rd") {
			alert('Login success!\n\n' + JSON.stringify(this.user, null, 4));
			location.href = "/profile"; // routes accordingly
		} else {
			alert("Invalid credentials!")
		}

		// TODO: validate against database credentials
	}
}
