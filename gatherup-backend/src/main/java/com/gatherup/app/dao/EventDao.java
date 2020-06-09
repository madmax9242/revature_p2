package com.gatherup.app.dao;

import com.gatherup.app.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventDao extends JpaRepository<Event, Integer> {

}
