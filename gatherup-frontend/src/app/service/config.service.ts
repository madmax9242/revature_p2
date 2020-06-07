import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs'; // HttpClient makes use of observables for all transactions
import { catchError, retry } from 'rxjs/operators';
import { User } from '../class/user/user';

/*
	This service provides CRUD operations via Angular's HttpClient
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
			'userid': '1'
		}),
	};

	// Boots HttpClient upon creation
	constructor(private http: HttpClient) {
		this.baseUrl = "http://localhost:9999/"; // sets baseUrl to the "home" endpoint
	}

	// READ
	public getUser(): Observable<User[]> {
		return this.http.get<User[]>(this.baseUrl + "user/all", this.httpOptions); // localhost:9999/user/all
	}

	public getUserById(id: number): Observable<User> {
		return this.http.get<User>(this.baseUrl + "user/" + id); // localhost:9999/user/{id}
	}

	public getUserByEmail(email: string): Observable<User> {
		return this.http.get<User>(this.baseUrl + "user/email/" + email); // localhost:9999/user/email/{email}
	}

	// CREATE
	public createUser(user: User) {
		return this.http.post<User>(this.baseUrl + "user", user, this.httpOptions); // localhost:9999/user
	}

	// UPDATE
	public updateUser(user: User) {
		return this.http.put<User>(this.baseUrl + "user", user); // localhost:9999/user
	}

	// DELETE
	public deleteUserById(id: number) {
		return this.http.delete<User>(this.baseUrl + "/user/delete/" + id) // localhost:9999/user/delete/{id}
	}











	// API TESTING (https://rickandmortyapi.com/documentation#character)
	private rmUrl: string;
	setUrl(id: number) {
		this.rmUrl = `https://rickandmortyapi.com/api/character/${id}`;
	}
	getRickMorty(): Observable<RickMorty> {
		return this.http.get<RickMorty>(this.rmUrl)
	}
}

// API TESTING
export interface RickMorty {
	"id": number;
	"name": string;
	"status": string;
	"species": string;
	"type": string;
	"gender": string;
	"origin": object;
	"location": object;
	"image": string;
	"episode": Array<RickMorty>;
	"url": string;
	"created": string;
}