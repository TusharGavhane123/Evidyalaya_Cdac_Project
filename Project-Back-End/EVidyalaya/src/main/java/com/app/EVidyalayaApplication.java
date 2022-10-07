package com.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EVidyalayaApplication {

	public static void main(String[] args) {
		SpringApplication.run(EVidyalayaApplication.class, args);
		String s1 = null;
		
		if("email".equals(s1)) {
			System.out.println("Hello");
		}else {
			System.out.println("end");
		}
	}

}
