-- =========================================
-- Exercise 3: Stored Procedures
-- =========================================

-- =========================================
-- Scenario 1: Process Monthly Interest
-- =========================================

DELIMITER $$

CREATE PROCEDURE ProcessMonthlyInterest()
BEGIN
    UPDATE Accounts
    SET balance = balance + (balance * 0.01)
    WHERE accountType = 'Savings';
END $$

DELIMITER ;

-- =========================================
-- Scenario 2: Update Employee Bonus
-- =========================================

DELIMITER $$

CREATE PROCEDURE UpdateEmployeeBonus(
    IN dept_name VARCHAR(50),
    IN bonus_percent DECIMAL(5,2)
)
BEGIN
    UPDATE Employees
    SET salary = salary + (salary * bonus_percent / 100)
    WHERE department = dept_name;
END $$

DELIMITER ;

-- =========================================
-- Scenario 3: Transfer Funds (IMPORTANT ONE)
-- =========================================

DELIMITER $$

CREATE PROCEDURE TransferFunds(
    IN from_account INT,
    IN to_account INT,
    IN amount DECIMAL(10,2)
)
BEGIN
    DECLARE balance_available DECIMAL(10,2);

    -- Get balance
    SELECT balance INTO balance_available
    FROM Accounts
    WHERE accountId = from_account;

    -- Check balance
    IF balance_available >= amount THEN

        START TRANSACTION;

        -- Deduct from sender
        UPDATE Accounts
        SET balance = balance - amount
        WHERE accountId = from_account;

        -- Add to receiver
        UPDATE Accounts
        SET balance = balance + amount
        WHERE accountId = to_account;

        COMMIT;

    ELSE
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Insufficient Balance';
    END IF;

END $$

DELIMITER ;