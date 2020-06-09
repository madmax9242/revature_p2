import { Component, OnInit } from '@angular/core';
import { User } from '../class/user/user';
import { ConfigService } from '../service/config.service';
import { Router } from '@angular/router';
import { PasswordEncryptionService } from '../service/password-encryption.service';

/* 
	This component maps input values to a JavaScript object and passes it to Java via our service's CRUD methods
*/
@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	// For register()
	user: User;

	constructor(private service: ConfigService, private router: Router, private encryptionService: PasswordEncryptionService) {
		// Complains if this is removed, dunno why tbh
		this.user = new User(undefined, undefined, undefined, undefined, undefined);
	}

	ngOnInit(): void {
	}

	register() {
		console.log("Register button pressed.");

		// Constructs a user object based on input values
		let email = (<HTMLInputElement>document.getElementById("inputEmail")).value;
		let password = (<HTMLInputElement>document.getElementById("inputPassword")).value;
		let firstName = (<HTMLInputElement>document.getElementById("inputFirstName")).value;
		let lastName = (<HTMLInputElement>document.getElementById("inputLastName")).value;
		let contact = (<HTMLInputElement>document.getElementById("inputContact")).value;
		this.user = new User(email, this.encryptionService.encrypt(password), firstName, lastName, contact);

		// Sanity check
		console.log(this.user);

		// POSTs constructed user to endpoint and routes to the profile view
		this.service.createUser(this.user).subscribe(data => this.router.navigate(["/profile"]));

		// POSTs user to endpoint and assigns to a local user object
		// this.service.createUser(this.user).subscribe(data => { this.user = data });
	}
}
