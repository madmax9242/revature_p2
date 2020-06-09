package com.gatherup.app.dao;

import com.gatherup.app.model.Group;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GroupDao extends JpaRepository<Group, Integer> {

}
