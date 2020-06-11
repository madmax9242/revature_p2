package com.gatherup.app.service.impl;

import com.gatherup.app.dao.UserDao;
import com.gatherup.app.model.User;
import com.gatherup.app.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDao userDao;

	// CREATE
	@Override
	public User createUser(User user) {
		return userDao.save(user);
	}

	// UPDATE
	@Override
	public User updateUser(User user) {
		return userDao.save(user);
	}

	// DELETE
	@Override
	public void deleteUserById(int id) {
		userDao.deleteById(id);
	}

	// READ
	@Override
	public List<User> getAllUsers() {
		return userDao.findAll();
	}

	@Override
	public User getUserById(int id) {
		return userDao.findById(id).get();
	}

	@Override
	public User getUserByEmail(String email) {
		return userDao.findUserByEmail(email).get();
	}
}
