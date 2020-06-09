package com.gatherup.app.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class MainController {

	@GetMapping("/") // base controller
	public String helloWorld() {

		return "Hello World!";

	}
	
	@GetMapping("/error") // Custom error page
	public String errorPage() {
		return "<h1>Error</h1>";
	}
}