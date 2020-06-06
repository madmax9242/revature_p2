package com.gatherup.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.gatherup.app.model.Event;
import com.gatherup.app.service.EventService;


public class EventController {
	
	@Autowired
	private EventService service;
	
	@PostMapping("/event")
	public Event createEvent(@RequestBody Event event) {
		return service.createEvent(event);
	}

	@PutMapping("/event")
	public Event updateEvent(@RequestBody Event event) {
		
		return service.updateEvent(event);
	}

	@GetMapping("/event/{id}")
	public Event getEventById(@PathVariable("id") int id) {
		return service.getEventById(id);
	}

	@DeleteMapping("/event/{id}")
	public void deleteEventById(@PathVariable("id")int id) {
		service.deleteEventById(id);
		
	}

	@GetMapping("/events")
	public List<Event> getAllEvents() {
		return service.getAllEvents();
	}
}
