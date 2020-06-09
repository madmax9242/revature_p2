export class User {

	email: string; // will act as primary key; will be a foreign key when we associate users with their bucket list items
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
