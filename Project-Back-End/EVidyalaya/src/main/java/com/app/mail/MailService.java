package com.app.mail;

import java.util.Iterator;
import java.util.List;
import java.util.concurrent.CompletableFuture;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.app.entities.Role;
import com.app.entities.User;
import com.app.repository.IUserRepository;

@Service
public class MailService {

	@Autowired
	private JavaMailSender mailSender;
	@Autowired
	private IUserRepository userRepo;

	public void sendSimpleEmail(Long FacultyId) {
		User u = userRepo.findById(FacultyId).orElseThrow();
		List<User> listUser = userRepo.findByRole(Role.ROLE_STUDENT);
		SimpleMailMessage message = new SimpleMailMessage();
		message.setFrom("evidyalaya.official@gmail.com");
		message.setSubject("Assignment Uploaded !!!");
		message.setText("You have a new assignment from Faculty : " + u.getName()
				+ " . Kindly , check portal for more details!!!");
		System.out.println(listUser.toArray());
		System.out.println("------");
		CompletableFuture<Void> future = CompletableFuture.runAsync(() -> {
			for (User user : listUser) {
				System.out.println(user.getEmail());
				message.setTo(user.getEmail());
				mailSender.send(message);
			}
		});

	}
}


