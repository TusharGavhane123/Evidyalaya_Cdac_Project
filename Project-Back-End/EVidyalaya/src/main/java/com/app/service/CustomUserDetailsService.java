package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.entities.User;
import com.app.repository.IUserRepository;

@Service // or @Component also works!
@Transactional
public class CustomUserDetailsService implements UserDetailsService {
	// dep : user repository : based upon spring data JPA
	@Autowired
	private IUserRepository userRepo;

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		System.out.println("in load by user nm " + email);
	
		User user = userRepo.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException("Invalid Email ID "));
		System.out.println(user.getName());
		System.out.println("lifted user dtls from db " + user);
		return new CustomUserDetails(user);
	}

}
