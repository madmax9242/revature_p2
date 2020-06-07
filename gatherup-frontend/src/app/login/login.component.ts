import { Component, OnInit } from '@angular/core';
import { User } from '../class/user/user'; // imports our User class
import { ConfigService } from '../service/config.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	user: User;
	// user: any = {};

	constructor(private service: ConfigService, private router: Router) {
		this.user = new User();
	}

	ngOnInit(): void {
	}

	onSubmit() {
		console.log("Login submit button pressed.");

		let email = (<HTMLInputElement>document.getElementById("inputEmail")).value;
		let password = (<HTMLInputElement>document.getElementById("inputPassword")).value;
		this.user = new User();

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
