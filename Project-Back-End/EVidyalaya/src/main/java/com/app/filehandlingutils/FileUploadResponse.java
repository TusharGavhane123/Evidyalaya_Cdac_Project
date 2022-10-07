package com.app.filehandlingutils;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FileUploadResponse {
	private String fileName;
	private String downloadUri;
	private long size;
	private Long studentId;
	private Long assignmentId;
}
