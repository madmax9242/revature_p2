package com.gatherup.app.service.impl;

import com.gatherup.app.dao.UserDao;
import com.gatherup.app.model.User;
import com.gatherup.app.service.UserService;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDao userDao;

	//For information gathering
	private Logger infoLogger = Logger.getLogger("InfoLogger");
	//For error reporting
	private Logger errorLogger = Logger.getLogger("ErrorLogger");
	
	// CREATE
	@Override
	public User createUser(User user) {
		User retUsr = null;
		if (getUserByEmail(user.getEmail()) == null) {
			retUsr = userDao.save(user);
			infoLogger.info("Succussfully saved user " + 
					user.getEmail() + "\nName: " + 
					user.getFirstName() + " " + user.getLastName() + "\nContact: " + 
					user.getContact());
		} else {
			errorLogger.error("Attempted new user creation with preexisting value " + user.getEmail());
		}
		return retUsr;
	}

	// UPDATE
	@Override
	public User updateUser(User user) {
		infoLogger.info("Succussfully updated user " + 
				user.getEmail() + "\nName: " + 
				user.getFirstName() + " " + user.getLastName() + "\nContact: " + 
				user.getContact());
		return userDao.save(user);
	}

	// DELETE
	@Override
	public void deleteUserById(int id) {
		infoLogger.info("Successfully deleted user " + getUserById(id).getEmail());
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
		if (!usr.getEmail().equals(null)) {
			if (usr.getPassword().equals(password)) {
				infoLogger.info(usr.getEmail() + " has just logged in.");
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
