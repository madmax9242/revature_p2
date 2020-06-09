package com.gatherup.app.dao;

import com.gatherup.app.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository // marks this class as a Data Access Object
public interface UserDao extends JpaRepository<User, Integer> {

//	public User findUserByEmail(String email); // don't need this bc getUserByEmail() is already present

}
