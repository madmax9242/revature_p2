/**
 * 
 */
package com.gatherup.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gatherup.app.model.Group;

/**
 * @author Dave
 *
 */
public interface GroupDao extends JpaRepository<Group, Integer> {

}
