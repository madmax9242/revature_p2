package com.gatherup.app.service.container;

import com.gatherup.app.dao.UserDao;
import com.gatherup.app.model.User;
import com.gatherup.app.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceContainer implements UserService {

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
		List<User> userList = userDao.findAll();
		for (User user : userList) {
			if (user.getEmail().equals(email)) {
				return user;
			}
		}
		return null;
	}

	// DELETE
	@Override
	public void deleteUserById(int id) {
		userDao.deleteById(id);
	}
}
