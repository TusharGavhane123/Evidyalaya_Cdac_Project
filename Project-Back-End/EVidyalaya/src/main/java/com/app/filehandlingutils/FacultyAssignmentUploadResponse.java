package com.app.filehandlingutils;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FacultyAssignmentUploadResponse {

	private String fileName;
	private String downloadUri;
	private long size;
	private String filecode;

}
