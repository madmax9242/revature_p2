import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Event } from '../class/event/event';

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

	// Boots HttpClient upon creation
	constructor(private http: HttpClient) {
		this.baseUrl = "http://localhost:9999/"; // sets baseUrl to the "home" endpoint
	}

	// READ
	public getAllEvents(): Observable<Event[]> {
		return this.http.get<Event[]>(this.baseUrl + "event/all", this.httpOptions); // localhost:9999/event/all
	}

	public getEventById(id: number): Observable<Event> {
		return this.http.get<Event>(this.baseUrl + "event/" + id); // localhost:9999/event/{id}
	}

	// CREATE
	public createEvent(event: Event) {
		return this.http.post<Event>(this.baseUrl + "event", event, this.httpOptions); // localhost:9999/event
	}

	// UPDATE
	public updateEvent(event: Event) {
		return this.http.put<Event>(this.baseUrl + "event", event); // localhost:9999/event
	}

	// DELETE
	public deleteEventById(id: number) {
		return this.http.delete<Event>(this.baseUrl + "/event/" + id) // localhost:9999/event/delete/{id}
	}
}
