package com.example.ezpay.repository.user;

import com.example.ezpay.model.user.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {
}
