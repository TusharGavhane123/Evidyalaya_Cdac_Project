package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.AssignmentAnswer;
import com.app.entities.User;

public interface IAssignmentAnswerRepository extends JpaRepository<AssignmentAnswer, Long> {

	List<AssignmentAnswer> findByFaculty(User u);

	List<AssignmentAnswer> findByStudent(User student);

//	public AssignmentAnswer findByStudentAndAssignmentId(long uid, long aid);
//
//	public List<AssignmentAnswer> findByFacultyId(Long id);
//
//	public AssignmentAnswer findByFacultyAndId(long uid, long aid);
//
//	public boolean existsByUserIdAndAssignmentId(long uid, long aid);

}
