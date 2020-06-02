import { Component, OnInit } from '@angular/core';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

	checkCredentials(): boolean {
		console.log(document.getElementById("inputEmail").textContent);

		if (document.getElementById("inputEmail").textContent == "hello@world.com") {
			console.log("Hello World");
			return true;
		}
		else {
			console.log("Not working, friend");
			return  false;
		}

		return false;
	}

}
