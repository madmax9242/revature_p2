package com.gatherup.app;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.gatherup.app.model.Event;
import com.gatherup.app.model.User;
import com.gatherup.app.service.UserService;
import com.gatherup.app.service.impl.EventServiceImpl;
import com.gatherup.app.service.impl.UserServiceImpl;

@SpringBootTest
class GatherupBackendApplicationTests {
	
	@Autowired
	private UserServiceImpl user;
	@Autowired
	private EventServiceImpl event;

	@Test
	void contextLoads() {
		System.out.println("I am in TEST!");
		
	}
	
	@Test
	void userTable() {
		User userByEmail = user.getUserByEmail("dwroble2@gmail.com");

		assertEquals("5853970486", userByEmail.getContact());
		assertEquals("dwroble2@gmail.com", userByEmail.getEmail());
		assertEquals("Dan", userByEmail.getFirstName());
		assertEquals("Wisniskski", userByEmail.getLastName());
	}
	
	@Test
	void eventsTable() {
		Event eventByName = event.getEventById(1);
		
		assertEquals("06/04/2020 13:30", eventByName.getDateTime());
		assertEquals("Picnic, bring food", eventByName.getEventDescription());
		assertEquals("Ellison Park", eventByName.getEventLocation());
		assertEquals("4th of July Picnic", eventByName.getEventName());
		assertEquals("Gathering", eventByName.getEventType());
	}

}
