package com.gatherup.dao;
import java.util.List;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.gatherup.model.Group;

@Repository("groupRepo")
public class GroupRepo {

	private SessionFactory sessionFactory;
	
	@Autowired
	public GroupRepo(SessionFactory inSessionFactory) {
		this.sessionFactory = inSessionFactory;
	}
	
	@Transactional
	public List<Group> selectAll(){
		List<Group> groupList = sessionFactory.getCurrentSession().createQuery("from Group", Group.class).list();
		return groupList;
		
	}
	
	public Group selectByGroupId(int inId) {
		Group group = sessionFactory.getCurrentSession().get(Group.class, inId);
		
		return group;
	}
	
	@Transactional
	public void insert(Group inGroup) {
		
		sessionFactory.getCurrentSession().save(inGroup);
	}
	
	@Transactional
	public void delete(Group inGroup) {
		
		
		sessionFactory.getCurrentSession().delete(inGroup); //Using contextual sessions
		
	}
	
	public void update(Group inGroup) {
		
		sessionFactory.getCurrentSession().update(inGroup);
		
	}

}

