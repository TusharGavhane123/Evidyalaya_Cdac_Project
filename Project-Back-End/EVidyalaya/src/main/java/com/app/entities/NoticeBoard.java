package com.app.entities;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Future;
import javax.validation.constraints.FutureOrPresent;
import javax.validation.constraints.NotBlank;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
@Entity
@Table(name = "noticeboard")
public class NoticeBoard extends BaseEntity {
	
	@FutureOrPresent(message = "Date Should be in Future ")
	private Date date;
	@NotBlank(message = "description is required")
	private String description;
	@ManyToOne
	@JoinColumn(name = "facultyid")
	private User faculty;
	@Column(name = "facultyname")
	private String facultyName;
	@Column(name = "modulename")
	private String moduleName;
	
	public Long getFaculty() {
		return faculty.getId();
	}

//	public String getFacultyName() {
//		return faculty.getName();
//	}
//
//	public void setFacultyName(String facultyname) {
//		this.facultyName = facultyname;
//	}

}
