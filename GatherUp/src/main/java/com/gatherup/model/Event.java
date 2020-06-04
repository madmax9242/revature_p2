package com.gatherup.model;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class Event {

	@Id
	@Column(name = "eventID", nullable = false)
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int eventID;
	@Column(name = "eventname")
	private String eventName;
	@Column(name = "eventtype")
	private String eventType;
	@Column(name = "day")
	private String day;
	@Column(name = "date")
	private String date;
	@Column(name = "time")
	private String time;
	@Column(name = "am_pm")
	private boolean amPM;
	@Column(name = "groupID")
	private int groupID;
	
	public Event() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Event(int eventID, String eventName, String eventType, String day, String date, String time, boolean amPM,
			int groupID) {
		super();
		this.eventID = eventID;
		this.eventName = eventName;
		this.eventType = eventType;
		this.day = day;
		this.date = date;
		this.time = time;
		this.amPM = amPM;
		this.groupID = groupID;
	}

	public int getEventID() {
		return eventID;
	}

	public void setEventID(int eventID) {
		this.eventID = eventID;
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

	public String getDay() {
		return day;
	}

	public void setDay(String day) {
		this.day = day;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public boolean isAmPM() {
		return amPM;
	}

	public void setAmPM(boolean amPM) {
		this.amPM = amPM;
	}

	public int getGroupID() {
		return groupID;
	}

	public void setGroupID(int groupID) {
		this.groupID = groupID;
	}

	@Override
	public String toString() {
		return "Event [eventID=" + eventID + ", eventName=" + eventName + ", eventType=" + eventType + ", day=" + day
				+ ", date=" + date + ", time=" + time + ", amPM=" + amPM + ", groupID=" + groupID + "]";
	}
	
	
	
}
