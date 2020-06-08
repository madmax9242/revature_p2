package com.gatherup.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.gatherup.app.model.User;
import com.gatherup.app.service.UserService;


public class UserController {

	@Autowired
	private UserService service;
	
	
	@PostMapping("/user")
	public User createUser(@RequestBody User user) {
		return service.createUser(user);
	}

	@PutMapping("/user")
	public User updateUser(@RequestBody User user) {
		
		return service.updateUser(user);
	}

	@GetMapping("/user/{id}")
	public User getUserById(@PathVariable("id") String userName) {
		return service.getUserByUserName(userName);
	}

	@DeleteMapping("/user/{id}")
	public void deleteUserById(@PathVariable("id") String userName) {
		service.deleteUserByUserName(userName);
		
	}

	@GetMapping("/users")
	public List<User> getAllUsers() {
		return service.getAllUsers();
	}
}
