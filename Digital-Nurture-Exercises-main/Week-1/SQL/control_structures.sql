-- turn on output so we can see messages
SET SERVEROUTPUT ON;

-- creating customer table
CREATE TABLE customers (
    customer_id NUMBER PRIMARY KEY,
    name VARCHAR2(50),
    age NUMBER,
    balance NUMBER,
    isVIP VARCHAR2(5)
);

-- loans table for storing loan details
CREATE TABLE loans (
    loan_id NUMBER PRIMARY KEY,
    customer_id NUMBER,
    interest_rate NUMBER,
    due_date DATE
);

-- inserting some sample data for testing
INSERT INTO customers VALUES (1, 'Amit', 65, 15000, 'FALSE');
INSERT INTO customers VALUES (2, 'Neha', 45, 8000, 'FALSE');
INSERT INTO customers VALUES (3, 'Ravi', 70, 20000, 'FALSE');

INSERT INTO loans VALUES (101, 1, 10, SYSDATE + 10);
INSERT INTO loans VALUES (102, 2, 12, SYSDATE + 40);
INSERT INTO loans VALUES (103, 3, 11, SYSDATE + 20);

COMMIT;


-- =========================
-- Scenario 1: senior citizens get discount
-- =========================
BEGIN
    FOR r IN (
        SELECT c.customer_id, l.loan_id
        FROM customers c, loans l
        WHERE c.customer_id = l.customer_id
        AND c.age > 60
    )
    LOOP
        UPDATE loans
        SET interest_rate = interest_rate - 1
        WHERE loan_id = r.loan_id;
    END LOOP;

    COMMIT;
END;
/

-- =========================
-- Scenario 2: mark VIP customers
-- =========================
BEGIN
    FOR r IN (
        SELECT customer_id
        FROM customers
        WHERE balance > 10000
    )
    LOOP
        UPDATE customers
        SET isVIP = 'TRUE'
        WHERE customer_id = r.customer_id;
    END LOOP;

    COMMIT;
END;
/

-- =========================
-- Scenario 3: loan reminders (due in 30 days)
-- =========================
BEGIN
    FOR r IN (
        SELECT c.name, l.due_date
        FROM customers c
        JOIN loans l ON c.customer_id = l.customer_id
        WHERE l.due_date <= SYSDATE + 30
          AND l.due_date >= SYSDATE
    )
    LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Reminder for ' || r.name ||
            ' : loan due on ' || TO_CHAR(r.due_date, 'DD-MON-YYYY')
        );
    END LOOP;
END;
/