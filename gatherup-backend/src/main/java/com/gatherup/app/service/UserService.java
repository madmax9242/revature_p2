package com.gatherup.app.service;

import com.gatherup.app.model.User;

import java.util.List;

/*
	Interface declares CRUD methods
 */
public interface UserService {

	// CREATE
	public User createUser(User user);

	// UPDATE
	public User updateUser(User user);

	// DELETE
	public void deleteUserById(int id);

	// READ
	public List<User> getAllUsers();

	public User getUserById(int id);

	public User getUserByEmail(String email);

}