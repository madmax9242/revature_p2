package com.gatherup.model;

import javax.persistence.*;

@Entity
@Table(name = "Users_Table")
public class Person {

	private String username;
	private String name;
	private String email;
	private String password;
	private int phoneNumber;

	public Person() {
	}

	public Person(String username, String name, String email, String password, int phoneNumber) {
		this.username = username;
		this.name = name;
		this.email = email;
		this.password = password;
		this.phoneNumber = phoneNumber;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(int phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	@java.lang.Override
	public java.lang.String toString() {
		return "Person {" +
				"username='" + username + '\'' +
				", name='" + name + '\'' +
				", email='" + email + '\'' +
				", password='" + password + '\'' +
				", phoneNumber=" + phoneNumber +
				'}';
	}
}
