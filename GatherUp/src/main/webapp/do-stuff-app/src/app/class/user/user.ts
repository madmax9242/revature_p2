export class User {

	constructor(
		public email: string,
		public password: string,
		public firstName: string,
		public lastName: string,
		public contact: number
	) { }

	// create new user like this:
	// myUser = new User("hello@world.com", "p4ssw0rd", "John", "Doe", 1234567890);
}
