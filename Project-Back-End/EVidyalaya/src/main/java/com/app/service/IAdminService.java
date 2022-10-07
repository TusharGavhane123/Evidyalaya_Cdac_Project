package com.app.service;

import java.util.List;

import com.app.entities.User;

public interface IAdminService {

	public User addFaculty(User s);

	public User addStudent(User s);

	public List<User> getAllFaculty();

	public User getFacultyById(Long id);

	public User updateFacultyDetails(User detachedFaculty, Long id);

	public String deleteFaculty(Long empId);

	public List<User> getAllStudent();

	public User getStudentById(Long id);

	User updateStudentDetails(User detachedStudent, Long id);

	String deleteStudent(Long id);

}
