package com.gatherup.app.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class Event {

	@Id
	@GeneratedValue
	@Column(unique = true)
	private int eventID;
	private String userEmail;
	private String eventName;
	private String eventType;
	private String eventLocation;
	private String dateTime;
	private String eventDescription;

	public Event() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Event(int eventID, String email, String eventName, String eventType, String eventLocation, String dateTime,
			String eventDescription) {
		super();
		this.eventID = eventID;
		this.userEmail = email;
		this.eventName = eventName;
		this.eventType = eventType;
		this.eventLocation = eventLocation;
		this.dateTime = dateTime;
		this.eventDescription = eventDescription;
	}

	public int getEventID() {
		return eventID;
	}

	public void setEventID(int eventID) {
		this.eventID = eventID;
	}

	public String getEmail() {
		return userEmail;
	}

	public void setEmail(String email) {
		this.userEmail = email;
	}

	public String getEventName() {
		return eventName;
	}

	public void setEventName(String eventName) {
		this.eventName = eventName;
	}

	public String getEventType() {
		return eventType;
	}

	public void setEventType(String eventType) {
		this.eventType = eventType;
	}

	public String getEventLocation() {
		return eventLocation;
	}

	public void setEventLocation(String eventLocation) {
		this.eventLocation = eventLocation;
	}

	public String getDateTime() {
		return dateTime;
	}

	public void setDateTime(String dateTime) {
		this.dateTime = dateTime;
	}

	public String getEventDescription() {
		return eventDescription;
	}

	public void setEventDescription(String eventDescription) {
		this.eventDescription = eventDescription;
	}

	
	
}
