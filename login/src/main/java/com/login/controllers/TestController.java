package com.login.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.login.model.Users;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TestController {

	private List<Users> users = createList();

	@GetMapping("/login")
	public boolean validate_details() {
		
		return true;
	}
	@RequestMapping(value = "/users", method = RequestMethod.GET, produces = "application/json")
	public List<Users> firstPage() {
		return users;
	}
	
	private static List<Users> createList() {
		List<Users> tempUsers = new ArrayList<>();
		Users emp1 = new Users();
		emp1.setName("emp1");
		emp1.setDesignation("manager");
		emp1.setEmpId("1");
		emp1.setSalary(3000);

		Users emp2 = new Users();
		emp2.setName("emp2");
		emp2.setDesignation("developer");
		emp2.setEmpId("2");
		emp2.setSalary(3000);
		tempUsers.add(emp1);
		tempUsers.add(emp2);
		return tempUsers;
	}

}