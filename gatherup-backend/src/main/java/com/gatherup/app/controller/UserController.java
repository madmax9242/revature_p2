package com.gatherup.app.controller;

import com.gatherup.app.model.User;
import com.gatherup.app.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


/*
	Uses DAO layer's methods to interact with database; this class acts like a "Servlet"
 */
@CrossOrigin
@RestController
public class UserController {

	@Autowired
	private UserService userService;

	// READ
	@GetMapping("/user/all")
	public List<User> getAllUsers() {
		return userService.getAllUsers();
	}

	@GetMapping("/user/{id}")
	public User getUserById(@PathVariable("id") int id) {
		return userService.getUserById(id);
	}

	@GetMapping("user/email/{email}")
	public User getUserByEmail(@PathVariable("email") String email) {
		return userService.getUserByEmail(email);
	}

	// CREATE
	@PostMapping("/user")
	public User createUser(@RequestBody User user) {
		return userService.createUser(user);
	}

	// UPDATE
	@PutMapping("/user")
	public User updateUser(@RequestBody User user) {
		return userService.updateUser(user);
	}

	// DELETE
	@DeleteMapping("/user/delete/{id}")
	public void deleteUserById(@PathVariable("id") int id) {
		userService.deleteUserById(id);
	}

}
