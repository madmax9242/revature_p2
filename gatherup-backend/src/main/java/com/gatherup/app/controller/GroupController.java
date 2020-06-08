package com.gatherup.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.gatherup.app.model.Group;
import com.gatherup.app.service.GroupService;

@CrossOrigin
@RestController
public class GroupController {

	@Autowired
	private GroupService service;
	
	@PostMapping("/group")
	public Group createGroup(@RequestBody Group group) {
		return service.createGroup(group);
	}

	@PutMapping("/group")
	public Group updateGroup(@RequestBody Group group) {
		
		return service.updateGroup(group);
	}

	@GetMapping("/group/{id}")
	public Group getGroupById(@PathVariable("id") int id) {
		return service.getGroupById(id);
	}

	@DeleteMapping("/group/{id}")
	public void deleteGroupById(@PathVariable("id")int id) {
		service.deleteGroupById(id);
		
	}

	@GetMapping("/groups")
	public List<Group> getAllGroups() {
		return service.getAllGroups();
	}

}
