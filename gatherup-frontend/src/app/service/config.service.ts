import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs'; // HttpClient makes use of observables for all transactions
import { catchError, retry } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class ConfigService {

	constructor(private http: HttpClient) { }

	// API TESTING (https://rickandmortyapi.com/documentation#character)
	private baseUrl: string;
	setUrl(id: number) {
		this.baseUrl = `https://rickandmortyapi.com/api/character/${id}`;
	}
	getRickMorty(): Observable<RickMorty> {
		return this.http.get<RickMorty>(this.baseUrl)
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