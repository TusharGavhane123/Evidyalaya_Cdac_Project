package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.databind.util.ClassUtil.Ctor;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "assignment")
public class Assignment extends BaseEntity {

	@Column(length = 200)
	private String description;
	@ManyToOne
	@JoinColumn(name = "facultyid")
	private User faculty;
	@Column(name = "facultyname", length = 45)
	private String facultyName;
	@Column(name = "filename", length = 45)
	private String fileName;
	@Column(name = "modulename", length = 45)
	private String moduleName;

	public Long getFaculty() {
		return faculty.getId();
	}

}
