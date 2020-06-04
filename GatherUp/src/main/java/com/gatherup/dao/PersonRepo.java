package com.gatherup.dao;
import java.util.List;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.gatherup.model.Person;

@Repository("personRepo")
public class PersonRepo {

	private SessionFactory sessionFactory;
	
	@Autowired
	public PersonRepo(SessionFactory inSessionFactory) {
		this.sessionFactory = inSessionFactory;
	}
	
	@Transactional
	public List<Person> selectAll(){
		List<Person> personList = sessionFactory.getCurrentSession().createQuery("from Person", Person.class).list();
		return personList;
		
	}
	
	public Person selectByUserId(int inId) {
		Person person = sessionFactory.getCurrentSession().get(Person.class, inId);
		
		return person;
	}
	
	@Transactional
	public void insert(Person inPerson) {
		
		sessionFactory.getCurrentSession().save(inPerson);
	}
	
	@Transactional
	public void delete(Person inPerson) {
		
		
		sessionFactory.getCurrentSession().delete(inPerson); //Using contextual sessions
		
	}
	
	public void update(Person inPerson) {
		
		sessionFactory.getCurrentSession().update(inPerson);
		
	}

}
