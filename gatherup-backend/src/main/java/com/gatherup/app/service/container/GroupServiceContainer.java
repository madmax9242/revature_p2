package com.gatherup.app.service.container;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gatherup.app.dao.GroupDao;
import com.gatherup.app.model.Event;
import com.gatherup.app.model.Group;
import com.gatherup.app.service.GroupService;

@Service
public class GroupServiceContainer implements GroupService{

	@Autowired
	private GroupDao dao;
	
	@Override
	public Group createGroup(Group g) {
		return dao.save(g);
	}

	@Override
	public Group updateGroup(Group g) {
		return dao.save(g);
	}

	@Override
	public List<Group> getAllGroups() {
		return dao.findAll();
	}

	@Override
	public void deleteGroupById(int id) {
		dao.deleteById(id);
	}

	@Override
	public Group getGroupById(int id) {
		Optional<Group> gr = dao.findById(id);
		Group retGroup = gr.get();
		return retGroup;
	}

}
