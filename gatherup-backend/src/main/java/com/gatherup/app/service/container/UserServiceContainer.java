package com.gatherup.app.service.container;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gatherup.app.dao.UserDao;
import com.gatherup.app.model.Group;
import com.gatherup.app.model.User;
import com.gatherup.app.service.UserService;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceContainer implements UserService{

	@Autowired
	private UserDao dao;
	

	@Override
	public User createUser(User u) {
		return dao.save(u);
	}

	@Override
	public User updateUser(User u) {
		return dao.save(u);
	}

	@Override
	public User getUserByUserName(String userName) {
		Optional<User> usr = dao.findById(userName);
		User retUser = usr.get();
		return retUser;
	}

	@Override
	public void deleteUserByUserName(String userName) {
		dao.deleteById(userName);
		
	}

	@Override
	public List<User> getAllUsers() {
		return dao.findAll();
	}
}
