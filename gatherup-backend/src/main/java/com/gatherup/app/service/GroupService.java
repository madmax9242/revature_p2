package com.gatherup.app.service;

import com.gatherup.app.model.Group;

import java.util.List;

public interface GroupService {

	public Group createGroup(Group g);

	public Group updateGroup(Group g);

	public List<Group> getAllGroups();

	public void deleteGroupById(int id);

	public Group getGroupById(int id);

}
