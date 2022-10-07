package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.TimeTable;
import com.app.entities.User;

public interface ITimetableRepository extends JpaRepository<TimeTable, Long> {

	public List<TimeTable> findByFaculty(User u);

}
