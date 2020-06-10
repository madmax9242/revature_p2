package com.gatherup.app.service.impl;

import com.gatherup.app.dao.EventDao;
import com.gatherup.app.model.Event;
import com.gatherup.app.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EventServiceImpl implements EventService {

	@Autowired
	private EventDao eventDao;

	// CREATE
	@Override
	public Event createEvent(Event event) {
		return eventDao.save(event);
	}

	// UPDATE
	@Override
	public Event updateEvent(Event event) {
		return eventDao.save(event);
	}

	// DELETE
	@Override
	public void deleteEventById(int id) {
		eventDao.deleteById(id);
	}

	// READ
	@Override
	public List<Event> getAllEvents() {
		return eventDao.findAll();
	}

	@Override
	public Event getEventById(int id) {
		Optional<Event> ev = eventDao.findById(id);
		Event retEvent = ev.get();
		return retEvent;
	}
}
