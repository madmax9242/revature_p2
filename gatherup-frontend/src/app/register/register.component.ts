import { Component, OnInit } from '@angular/core';
import { User } from '../class/user/user'; // imports our User class
import { ConfigService } from '../service/config.service';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

/* 
	This component maps input values to a JavaScript object and passes it to Java via our service's CRUD methods
*/
@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	// For createUser()
	user: User;
	// user: any = {};

	// For getAllUsers()
	allUsers: User[];

	constructor(private service: ConfigService, private router: Router) {
		this.user = new User();
	}

	ngOnInit(): void {
	}

	createUser() {
		console.log("Register submit button pressed.");

		// // Constructs a user instance based on input values
		// let email = (<HTMLInputElement>document.getElementById("inputEmail")).value;
		// let password = (<HTMLInputElement>document.getElementById("inputPassword")).value;
		// let firstName = (<HTMLInputElement>document.getElementById("inputFirstName")).value;
		// let lastName = (<HTMLInputElement>document.getElementById("inputLastName")).value;
		// let contact = (<HTMLInputElement>document.getElementById("inputContact")).value;

		this.service.createUser(this.user).subscribe(res => this.router.navigate(["/profile"]));
		this.user = new User();
		console.log(this.user);
	}

	getAllUsers() {
		console.log("Getting all users.");

		this.service.getAllUsers().subscribe(data => { this.allUsers = data; });
	}
}
