/**
 * 
 */
package com.gatherup.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gatherup.app.model.User;

/**
 * @author Dave
 *
 */
public interface UserDao extends JpaRepository<User, String> {

}
