import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NGXLogger } from 'ngx-logger';

import { User } from '../class/user/user';

/*
	This service provides CRUD operations for users
*/
@Injectable({
	providedIn: 'root'
})
export class ConfigService {

	public baseUrl: string;

	// Custom HTTP options to throw into CRUD operations
	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			'Authorization': 'authkey',
		}),
	};

	// Boots HttpClient upon creation
	constructor(private http: HttpClient, private loggy: NGXLogger) {
		this.baseUrl = "http://localhost:9999/"; // development endpoint
		// this.baseUrl = "http://ec2-18-217-122-210.us-east-2.compute.amazonaws.com:9999/"; // production endpoint
	}

	// CREATE
	public createUser(user: User) {
		try {
			return this.http.post<User>(this.baseUrl + "user", user, this.httpOptions); // localhost:9999/user
		} catch (error) {
			this.loggy.error("ConfigService createUser() error: " + error)
		}
	}

	// READ
	public getAllUsers(): Observable<User[]> {
		try {
			return this.http.get<User[]>(this.baseUrl + "user/all", this.httpOptions); // localhost:9999/user/all
		} catch (error) {
			this.loggy.error("ConfigService getAllUsers() error: " + error)
		}
	}

	public getUserById(id: number): Observable<User> {
		try {
			return this.http.get<User>(this.baseUrl + "user/" + id, this.httpOptions); // localhost:9999/user/{id}
		} catch (error) {
			this.loggy.error("ConfigService getUserById() error: " + error)
		}
	}

	public getUserByEmail(email: string): Observable<User> {
		try {
			return this.http.get<User>(this.baseUrl + "user/email/" + email, this.httpOptions); // localhost:9999/user/email/{email}
		} catch (error) {
			this.loggy.error("ConfigService getUserByEmail() error: " + error)
		}
	}

	// UPDATE
	public updateUser(user: User) {
		try {
			return this.http.put<User>(this.baseUrl + "user", user, this.httpOptions); // localhost:9999/user
		} catch (error) {
			this.loggy.error("ConfigService updateUser() error: " + error)
		}
	}

	// DELETE
	public deleteUserById(id: number) {
		try {
			return this.http.delete<User>(this.baseUrl + "user/" + id, this.httpOptions) // localhost:9999/user/{id}
		} catch (error) {
			this.loggy.error("ConfigService deleteUserById() error: " + error)
		}
	}

	// LOGIN
	public login(user: User): Observable<User> {
		try {
			return this.http.post<User>(this.baseUrl + "user/verify", user); // localhost:9999/user/verify
		} catch (error) {
			this.loggy.error("ConfigService login() error: " + error)
		}
	}
}
