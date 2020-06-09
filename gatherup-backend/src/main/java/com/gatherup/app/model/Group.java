package com.gatherup.app.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class Group {

	@Id
	@GeneratedValue
	private int groupID;
	private String groupName;
	private String admin;
	private String groupSlogan;
	private int memberIDs;
	private int eventIDs;

	public Group() {
		super();
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

	public String getAdminUserName() {
		return admin;
	}

	public void setAdminUserName(String adminUserName) {
		this.admin = adminUserName;
	}

	public String getGroupSlogan() {
		return groupSlogan;
	}

	public void setGroupSlogan(String groupSlogan) {
		this.groupSlogan = groupSlogan;
	}

	public int getMemberID() {
		return memberIDs;
	}

	public void setMemberID(int memberID) {
		this.memberIDs = memberID;
	}

	public int getEventID() {
		return eventIDs;
	}

	public void setEventID(int eventID) {
		this.eventIDs = eventID;
	}

	@Override
	public String toString() {
		return "Group [groupID=" + groupID + ", groupName=" + groupName + ", adminUserName=" + admin
				+ ", groupSlogan=" + groupSlogan + ", memberID=" + memberIDs + ", eventID=" + eventIDs + "]";
	}
}
