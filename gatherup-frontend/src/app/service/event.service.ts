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
		}),
	};

	// Boots HttpClient upon creation
	constructor(private http: HttpClient) {
		this.baseUrl = "http://localhost:9999/"; // development endpoint
		// this.baseUrl = "http://ec2-18-217-122-210.us-east-2.compute.amazonaws.com:9999/"; // production endpoint
	}

	// CREATE
	public createEvent(event: Event) {
		try {
			return this.http.post<Event>(this.baseUrl + "event", event, this.httpOptions); // localhost:9999/event
		} catch (error) {
			console.log("EventService createEvent() error: " + error);
		}
	}

	// READ
	public getAllEvents(): Observable<Event[]> {
		try {
			return this.http.get<Event[]>(this.baseUrl + "event/all", this.httpOptions); // localhost:9999/event/all
		} catch (error) {
			console.log("EventService getAllEvents() error: " + error);
		}
	}

	public getEventById(id: number): Observable<Event> {
		try {
			return this.http.get<Event>(this.baseUrl + "event/" + id); // localhost:9999/event/{id}
		} catch (error) {
			console.log("EventService getEventById() error: " + error);
		}
	}

	// UPDATE
	public updateEvent(event: Event) {
		try {
			return this.http.put<Event>(this.baseUrl + "event", event); // localhost:9999/event
		} catch (error) {
			console.log("EventService updateEvent() error: " + error);
		}
	}

	// DELETE
	public deleteEventById(id: number) {
		try {
			return this.http.delete<Event>(this.baseUrl + "/event/" + id) // localhost:9999/event/{id}
		} catch (error) {
			console.log("EventService deleteEventById() error: " + error);
		}
	}
}
