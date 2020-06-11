import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../class/user/user';
import { ConfigService } from '../service/config.service';
import { PasswordEncryptionService } from '../service/password-encryption.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	// For login()
	user: User;

	constructor(private configService: ConfigService, private router: Router, private encryptionService: PasswordEncryptionService) {
		this.user = new User(undefined, undefined, undefined, undefined, undefined, undefined);
	}

	ngOnInit(): void {
	}

	login() {
		console.log("login() button pressed.");

		// Constructs a user object to validate credentials
		let email = (<HTMLInputElement>document.getElementById("inputEmail")).value;
		let password = (<HTMLInputElement>document.getElementById("inputPassword")).value;
		this.user = new User(undefined, email, this.encryptionService.encrypt(password), undefined, undefined, undefined);

		// Sanity check
		console.log(this.user);

		// Validates against hard-coded credentials
		// if (this.user.email == "hello@world.com" && this.user.password == "p4ssw0rd") {
		// 	alert('Login success!\n\n' + JSON.stringify(this.user, null, 4));
		// 	location.href = "/profile"; // routes accordingly
		// } else {
		// 	alert("Invalid credentials!")
		// }

		// Validates against database credentials and routes to profile page
		this.configService.getUserByEmail(this.user.email).subscribe(data => this.router.navigate(["/eventview"]));
	}
}