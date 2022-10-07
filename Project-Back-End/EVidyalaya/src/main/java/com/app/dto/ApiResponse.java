package com.app.dto;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString
public class ApiResponse {
	private LocalDateTime timeStamp;
	private String message;
	// private HttpStatus st;

	public ApiResponse(String message) {
		super();
		// this.st = st;
		this.message = message;
		this.timeStamp = LocalDateTime.now();
	}

}
