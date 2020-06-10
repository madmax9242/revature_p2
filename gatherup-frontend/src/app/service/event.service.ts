import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

/*
	This service provides CRUD operations for events
*/
@Injectable({
	providedIn: 'root'
})
export class EventService {

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

	constructor() { }

}
