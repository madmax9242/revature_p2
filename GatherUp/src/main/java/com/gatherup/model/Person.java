package com.gatherup.model;

import javax.persistence.*;

@Entity
@Table(name = "users_table")
public class Person {

	@Id
	@Column(name = "userID", nullable = false)
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int userID;
//	@Column(name = "email")
//	private String email;
//	@Column(name = "password")
//	private String password;
	@Column(name = "firstName")
	private String firstName;
	@Column(name = "lastName")
	private String lastName;
	@Column(name = "age")
	private int age;
	@Column(name = "sex")
	private String sex;
	@Column(name = "favoriteMusic")
	private String favoriteMusic;
	@Column(name = "hobbies")
	private String hobbies;
	@Column(name = "city")
	private String city;
	@Column(name = "state")
	private String state;
	
	public Person() {
		super();
		// TODO Auto-generated constructor stub
	}

	

	public Person(int userID, String firstName, String lastName, int age, String sex, String favoriteMusic,
			String hobbies, String city, String state) {
		super();
		this.userID = userID;
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.sex = sex;
		this.favoriteMusic = favoriteMusic;
		this.hobbies = hobbies;
		this.city = city;
		this.state = state;
	}



	public int getUserID() {
		return userID;
	}



	public void setUserID(int userID) {
		this.userID = userID;
	}



	public String getFirstName() {
		return firstName;
	}



	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}



	public String getLastName() {
		return lastName;
	}



	public void setLastName(String lastName) {
		this.lastName = lastName;
	}



	public int getAge() {
		return age;
	}



	public void setAge(int age) {
		this.age = age;
	}



	public String getSex() {
		return sex;
	}



	public void setSex(String sex) {
		this.sex = sex;
	}



	public String getFavoriteMusic() {
		return favoriteMusic;
	}



	public void setFavoriteMusic(String favoriteMusic) {
		this.favoriteMusic = favoriteMusic;
	}



	public String getHobbies() {
		return hobbies;
	}



	public void setHobbies(String hobbies) {
		this.hobbies = hobbies;
	}



	public String getCity() {
		return city;
	}



	public void setCity(String city) {
		this.city = city;
	}



	public String getState() {
		return state;
	}



	public void setState(String state) {
		this.state = state;
	}



	@Override
	public String toString() {
		return "Person [firstName=" + firstName + ", lastName=" + lastName + ", age=" + age + ", sex=" + sex
				+ ", favoriteMusic=" + favoriteMusic + ", hobbies=" + hobbies + ", city=" + city
				+ ", state=" + state + "]";
	}
	
	
	
}
