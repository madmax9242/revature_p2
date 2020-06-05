import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs'; // HttpClient makes use of observables for all transactions
import { catchError, retry } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class ConfigService {

	// Injects HttpClient upon class-creation
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

	private chuckUrl = 'https://api.chucknorris.io/jokes/random';

	getChuck() {
		return this.http.get<ChuckNorris>(this.chuckUrl)
	}
}

export interface ChuckNorris {
	"category": any;
	"icon_url": string;
	"id": string;
	"url": string;
	"value": string;
}