package com.gatherup.app.service.container;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gatherup.app.dao.EventDao;
import com.gatherup.app.model.Event;
import com.gatherup.app.service.EventService;

@Service
public class EventServiceContainer implements EventService{

	@Autowired
	private EventDao dao;
	
	@Override
	public Event createEvent(Event e) {
		return dao.save(e);
	}

	@Override
	public Event updateEvent(Event e) {
		return dao.save(e);
	}

	@Override
	public void deleteEventById(int id) {
		dao.deleteById(id);
	}

	@Override
	public List<Event> getAllEvents() {
		return dao.findAll();
	}

	@Override
	public Event getEventById(int id) {
		Optional<Event> ev = dao.findById(id);
		Event retEvent = ev.get();
		return retEvent;
	}

}
