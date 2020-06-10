import { Injectable } from '@angular/core';
// import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

/*
	Encrypts password before sending to DB
*/
@Injectable({
	providedIn: 'root'
})
export class PasswordEncryptionService {

	constructor() { }

	encrypt(password: string) {
		var newPassword: string = "";
		var forwards: string = "ZYXWVUTSRQPONMLKJIHGFEDCBAabcdefghijklmnopqrstuvwxyz0987654321";
		var backwards: string = "1234567890zyxwvutsrqponmlkjihgfedcbaABCDEFGHIJKLMNOPQRSTUVWXYZ";
		var tempIndex: number = 0;

		for (var i: number = 0; i < password.length; i++) {
			tempIndex = forwards.indexOf(password[i]);
			newPassword += backwards[tempIndex];

		}
		console.log(newPassword);
		return newPassword;
	}
}
