package com.app.service;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.app.dto.AssignmentAnswerDto;
import com.app.dto.UserDto;
import com.app.entities.Assignment;
import com.app.entities.AssignmentAnswer;
import com.app.entities.NoticeBoard;
import com.app.entities.TimeTable;
import com.app.entities.User;

public interface IStudentService {

	User authenticateUser(String email, String password);

	public AssignmentAnswer uploadAssignment(AssignmentAnswer answer);

	// public boolean checkUploadAnswerByUser(Long userId, Long assignmentId);
//
//	public String checkGradedByUser(Long userId, Long assignmentId);
//
//	public User updateProfile(User u);

	public AssignmentAnswer saveAssignmentAnswerFile(Long assignId, Long studentId, String fileName) throws IOException;

	public List<Assignment> getAllAssignment();

	List<NoticeBoard> getAllNoticeBoard();

	List<TimeTable> getAllTimeTable();

	List<User> getAllFacultyByRoleFaculty();

	List<AssignmentAnswer> getAllAssignmentByStudentIdWithGrade(Long studentId);

}
