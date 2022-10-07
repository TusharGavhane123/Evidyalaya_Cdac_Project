package com.app.service;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.entities.Assignment;
import com.app.entities.AssignmentAnswer;
import com.app.entities.NoticeBoard;
import com.app.entities.Role;
import com.app.entities.TimeTable;
import com.app.entities.User;
import com.app.repository.IAssignmentAnswerRepository;
import com.app.repository.IAssignmentRepository;
import com.app.repository.INoticeboardRepository;
import com.app.repository.ITimetableRepository;
import com.app.repository.IUserRepository;

@Service
public class StudentServiceImpl implements IStudentService {

	@Autowired
	IUserRepository userRepo;

	@Autowired
	private IAssignmentAnswerRepository assignRepo;

	@Autowired
	private IAssignmentRepository assignmentRepo;

	@Autowired
	INoticeboardRepository noticeRepo;

	@Autowired
	ITimetableRepository timeRepo;

	@Value("${file.upload.location}")
	private String folderLocation;

	@Override
	public User authenticateUser(String mail, String password) {
		User user = userRepo.findByEmail(mail)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Email ID !!!!!!"));
		if (user != null && user.getPassword().equals(password))
			return user;
		return null;
	}

	@Override
	public AssignmentAnswer uploadAssignment(AssignmentAnswer answer) {

		return assignRepo.save(answer);
	}

	@Override
	public List<Assignment> getAllAssignment() {

		return assignmentRepo.findAll();
	}

	@Override
	public List<NoticeBoard> getAllNoticeBoard() {
		return noticeRepo.findAll();

	}

	@Override
	public List<TimeTable> getAllTimeTable() {
		return timeRepo.findAll();
	}

	@Override
	public List<User> getAllFacultyByRoleFaculty() {

		return userRepo.findByRole(Role.ROLE_FACULTY);
	}

	@Override
	public AssignmentAnswer saveAssignmentAnswerFile(Long assignId, Long studentId, String fileName)
			throws IOException {

		User student = userRepo.findById(studentId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Student ID : Can't save file!!!!!!!"));

		Assignment assignment = assignmentRepo.findById(assignId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Assignment ID : Can't save file!!!!!!!"));

		User faculty = userRepo.findById(assignment.getFaculty())
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Faculty ID : Can't save file!!!!!!!"));

		AssignmentAnswer aa = new AssignmentAnswer();
		aa.setAssignmentId(assignment);
		aa.setStudent(student);
		aa.setFileName(fileName);
		aa.setFaculty(faculty);
		aa.setModuleName(assignment.getModuleName());
		aa.setStudentName(student.getName());
		assignRepo.save(aa);
		return aa;
	}

	@Override
	public List<AssignmentAnswer> getAllAssignmentByStudentIdWithGrade(Long studentId) {
		User student = userRepo.findById(studentId)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Student ID!!"));

		return assignRepo.findByStudent(student);
	}
}
