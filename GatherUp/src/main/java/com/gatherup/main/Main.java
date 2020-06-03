package com.gatherup.main;

import com.gatherup.dao.PersonRepo;
import com.gatherup.model.Person;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Main {

	public static ApplicationContext appContext = new ClassPathXmlApplicationContext("applicationContext.xml");

	public static PersonRepo userRepo = appContext.getBean("personRepo", PersonRepo.class);

	public static void main(String[] args) {
		signUp();

		System.out.println(userRepo.selectByUserId(1));
//		System.out.println(userRepo.selectByUserID(2));
//		System.out.println(userRepo.selectByUserID(3));
	}

	private static void signUp() {

		userRepo.insert(new Person(1, "Dave", "Wroblewski", 37, "Male", "Metal/Rock", "Playing Guitar", "Rochester", "NY"));
//		userRepo.insert(new Person(1, "Dave", "Wroblewski", 37, "Male", "Metal/Rock", "Playing Guitar", "Rochester", "NY"));
//		userRepo.insert(new Person(2, "Chris", "Powers", 29, "Male", "Metal/Rock", "Playing Piano", "Fairport", "NY"));
//		userRepo.insert(new Person(3, "Someone", "Idontknow", 25, "Female", "Pop/Punk", "Reading", "Greece", "NY"));
	}
}
