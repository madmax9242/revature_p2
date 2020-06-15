package com.gatherup.app.service.impl;

import com.gatherup.app.dao.EventDao;
import com.gatherup.app.model.Event;
import com.gatherup.app.service.EventService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EventServiceImpl implements EventService {

	@Autowired
	private EventDao eventDao;

	//For information gathering
	private final Logger infoLogger = Logger.getLogger("InfoLogger");
	//For error reporting
	private Logger errorLogger = Logger.getLogger("ErrorLogger");

	// CREATE
	@Override
	public Event createEvent(Event event) {
		infoLogger.info(event.getEventName() + " was just created.");
		return eventDao.save(event);
	}

	// UPDATE
	@Override
	public Event updateEvent(Event event) {
		infoLogger.info(event.getEventName() + " was just updated.");
		return eventDao.save(event);
	}

	// DELETE
	@Override
	public void deleteEventById(int id) {
		infoLogger.info(getEventById(id).getEventName() + " was just deleted.");
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
