package com.gatherup.app.service;

import java.util.List;

import com.gatherup.app.model.User;

public interface UserService{
	
	public User createUser(User u);
	public User updateUser(User u);
	public User getUserByUserName(String userName);
	public void deleteUserByUserName(String userName);
	public List<User> getAllUsers();
	
}