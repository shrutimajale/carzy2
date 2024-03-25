package com.carzy.authenticator;

import java.util.Date;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;

import com.carzy.model.Token;
import com.carzy.repository.TokenRepository;

@Configuration
public class MyToken {
    private final String SECRET = "a6KlYqXbkDEYQS8YJsOb";

    @Autowired
    TokenRepository tokenRepository;

    public String generateToken() {
        return String.valueOf(new Date().getTime()) + SECRET;
    }

    public Boolean useAuth(String token, String userid) {
        Optional<Token> result = tokenRepository.findByToken(token);
        if (result.isPresent() && result.get().getUserId().equals(userid)) {
            return true;
        } else
            return false;
    }
}
