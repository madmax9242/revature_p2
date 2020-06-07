export class User {

	email: string;
	password: string;
	firstName: string;
	lastName: string;
	contact: string;

	constructor(email: string, password: string, firstName: string, lastName: string, contact: string) {
		this.email = email;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.contact = contact;
	}
}
