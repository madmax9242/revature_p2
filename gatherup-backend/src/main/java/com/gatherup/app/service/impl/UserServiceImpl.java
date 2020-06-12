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
//	@Autowired
//	private UserEmailDao userEmailDao;

	// CREATE
	@Override
	public User createUser(User user) {
		User retUsr = null;
		if (getUserByEmail(user.getEmail()) == null) {
			retUsr = userDao.save(user);
			System.out.println("I am creating a new user");
		} else {
			System.out.println("I already exist");
		}
		return retUsr;
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
		Optional<User> usr = userDao.findById(id);
		User retUser = usr.get();
		return retUser;
	}

	@Override
	public User getUserByEmail(String email) {
		System.out.println("From getUserByEmail: " + email);
		User retUser = null;
		List<User> userList = userDao.findAll();
		for (User user : userList) {
			if (user.getEmail().equals(email)) {
				retUser = user;
				break;
			}
		}
		return retUser;
	}

	@Override
	public User login(String email, String password) {
		User retUser = null;
		//Gets user by email
		System.out.println("Email: " + email + " Password: " + password);
		User usr = getUserByEmail(email);
		if (usr == null) {
			System.out.println("I am null");
		} else {
			System.out.println("I am here");
		}
		//System.out.println(usr.getFirstName());
		if (!usr.getEmail().equals(null)) {
			if (usr.getPassword().equals(password)) {
				retUser = usr;
			}
		} else {
			return null;
		}
		return null;
	}

	@Override
	public User verifyUser(User user) {
		System.out.println("REQUEST OBJECT: " + user);

		User u1 = userDao.findUserByEmail(user.getEmail());
		System.out.println("DB OBJECT: " + u1);

		if (u1 != null && u1.getPassword().equals(user.getPassword())) {
			System.out.println("Success");
			return u1;
		}
		System.out.println("Unsuccessful");
		return null;
	}
}
