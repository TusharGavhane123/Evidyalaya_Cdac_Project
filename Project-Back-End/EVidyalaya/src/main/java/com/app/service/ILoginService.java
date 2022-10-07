package com.app.service;

import com.app.entities.User;

public interface ILoginService {

	User authenticateUser(String email, String password);
}
