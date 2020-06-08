package com.gatherup.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gatherup.app.model.Event;

public interface EventDao extends JpaRepository<Event, Integer> {

}
