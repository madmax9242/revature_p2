package com.gatherup.app.service;

import com.gatherup.app.model.Event;

import java.util.List;

public interface EventService {

	public Event createEvent(Event e);

	public Event updateEvent(Event e);

	public void deleteEventById(int id);

	public List<Event> getAllEvents();

	public Event getEventById(int id);
}
