import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../class/user/user';


		

		// if (this.tempUser != null) {
		// 	this.router.navigate(["/eventview"]);
		// } else {
		// 	alert("Invalid credentials!");
		// }
	}
}

// Validates against hard-coded credentials
// if (this.user.email == "hello@world.com" && this.user.password == "p4ssw0rd") {
// 	alert('Login success!\n\n' + JSON.stringify(this.user, null, 4));
// 	location.href = "/profile"; // routes accordingly
// } else {
// 	alert("Invalid credentials!")
// }

// Sends user object to backend AND routes to event view
// this.configService.login(this.user).subscribe(data => this.router.navigate(["/eventview"]));