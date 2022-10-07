package com.app.entities;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Past;

import org.aspectj.lang.annotation.Before;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "userdetail")
public class User extends BaseEntity {

	@Column(length = 45)
	@NotBlank(message = "name is required")
	private String name;
	@Column(length = 45)
	@NotBlank(message = "address is required")
	private String address;
	@Past(message = "Date Should not be in future")
	private LocalDate dob;
	@NotBlank(message = "password is required")
	@Column(length = 400)
	private String password;
	@NotBlank(message = "email is required")
	@Column(unique = true)
	private String email;
	@Column(name = "mobno")
	private String mobNo;
	@Enumerated(EnumType.STRING)
	private Role role;

}
