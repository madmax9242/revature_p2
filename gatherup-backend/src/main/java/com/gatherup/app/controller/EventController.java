package com.gatherup.app.controller;

import com.gatherup.app.model.Event;
import com.gatherup.app.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

public class EventController {

	@Autowired
	private EventService service;

	// READ
	@GetMapping("/event/all") // localhost:9999/event/all
	public List<Event> getAllEvents() {
		return service.getAllEvents();
	}

	@GetMapping("/event/{id}") // localhost:9999/event/{id}
	public Event getEventById(@PathVariable("id") int id) {
		return service.getEventById(id);
	}

	// CREATE
	@PostMapping("/event") // localhost:9999/event
	public Event createEvent(@RequestBody Event event) {
		return service.createEvent(event);
	}

	// UPDATE
	@PutMapping("/event") // localhost:9999/event
	public Event updateEvent(@RequestBody Event event) {
		return service.updateEvent(event);
	}

	// DELETE
	@DeleteMapping("/event/{id}") // localhost:9999/event/delete/{id}
	public void deleteEventById(@PathVariable("id") int id) {
		service.deleteEventById(id);
	}
}
