package com.gatherup.model;

import java.util.*;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class Group {

	@Id
	@Column(name = "groupID", nullable = false)
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int groupID;
	@Column(name = "groupname")
	private String groupName;
	@Column(name = "adminname")
	private String adminName;
	@Column(name = "slogan")
	private String slogan;
	
	//Not Injected
	private ArrayList<String> commentsList;
	private ArrayList<Event> eventsList;
	private ArrayList<Person> groupActiveMembersList;
	private ArrayList<Person> groupPendingMembersList;
	
	public Group() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Group(int groupID, String groupName, String adminName, String slogan, ArrayList<String> commentsList,
			ArrayList<Event> eventsList, ArrayList<Person> groupActiveMembersList,
			ArrayList<Person> groupPendingMembersList) {
		super();
		this.groupID = groupID;
		this.groupName = groupName;
		this.adminName = adminName;
		this.slogan = slogan;
		this.commentsList = commentsList;
		this.eventsList = eventsList;
		this.groupActiveMembersList = groupActiveMembersList;
		this.groupPendingMembersList = groupPendingMembersList;
	}

	public int getGroupID() {
		return groupID;
	}

	public void setGroupID(int groupID) {
		this.groupID = groupID;
	}

	public String getGroupName() {
		return groupName;
	}

	public void setGroupName(String groupName) {
		this.groupName = groupName;
	}

	public String getAdminName() {
		return adminName;
	}

	public void setAdminName(String adminName) {
		this.adminName = adminName;
	}

	public String getSlogan() {
		return slogan;
	}

	public void setSlogan(String slogan) {
		this.slogan = slogan;
	}

	public ArrayList<String> getCommentsList() {
		return commentsList;
	}

	public void setCommentsList(ArrayList<String> commentsList) {
		this.commentsList = commentsList;
	}

	public ArrayList<Event> getEventsList() {
		return eventsList;
	}

	public void setEventsList(ArrayList<Event> eventsList) {
		this.eventsList = eventsList;
	}

	public ArrayList<Person> getGroupActiveMembersList() {
		return groupActiveMembersList;
	}

	public void setGroupActiveMembersList(ArrayList<Person> groupActiveMembersList) {
		this.groupActiveMembersList = groupActiveMembersList;
	}

	public ArrayList<Person> getGroupPendingMembersList() {
		return groupPendingMembersList;
	}

	public void setGroupPendingMembersList(ArrayList<Person> groupPendingMembersList) {
		this.groupPendingMembersList = groupPendingMembersList;
	}

	@Override
	public String toString() {
		return "Group [groupID=" + groupID + ", groupName=" + groupName + ", adminName=" + adminName + ", slogan="
				+ slogan + ", commentsList=" + commentsList + ", eventsList=" + eventsList + ", groupActiveMembersList="
				+ groupActiveMembersList + ", groupPendingMembersList=" + groupPendingMembersList + "]";
	}
	
	
	
	
	
	
}
