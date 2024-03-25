package com.carzy.repository;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.carzy.model.Token;

public interface TokenRepository extends JpaRepository<Token, String> {
    Optional<Token> findByToken(String token);
    Optional<Token> findByUserId(String userId);

}
