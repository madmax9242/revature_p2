import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs'; // HttpClient makes use of observables for all transactions
import { catchError, retry } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class ConfigService {

	// Injects HttpClient upon ConfigService creation
	constructor(private http: HttpClient) { }

	// options configures various aspects of an outgoing request
	options: {
		headers?: HttpHeaders | { [header: string]: string | string[] },
		observe?: "body" | "events" | "response", // specifies how much of the response to return
		params?: HttpParams | { [param: string]: string | string[] },
		reportProgress?: boolean,
		responseType?: "arraybuffer" | "blob" | "json" | "text", // specifies the format in which to return data
		withCredentials?: boolean
	}

	// API TESTING (https://rickandmortyapi.com/documentation#character)
	private url = 'https://rickandmortyapi.com/api/character/1';
	getRickMorty() {
		return this.http.get<RickMorty>(this.url)
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