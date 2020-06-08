package com.gatherup.app.service;

import java.util.List;

import com.gatherup.app.model.Event;

public interface EventService {

	public Event createEvent(Event e);
	public Event updateEvent(Event e);
	public void deleteEventById(int id);
	public List<Event> getAllEvents();
	public Event getEventById(int id);
}
