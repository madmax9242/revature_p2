package com.gatherup.app.dao;

import com.gatherup.app.model.User;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDao extends JpaRepository<User, Integer> {

	User findUserByEmail(String email);
  
}
