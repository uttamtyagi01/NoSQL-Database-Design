-- Q12: Cassandra Employee CRUD
USE CollegeDB;
CREATE TABLE Employees (
  employee_id int PRIMARY KEY,
  name text,
  department text,
  salary int
);
INSERT INTO Employees (employee_id,name,department,salary) VALUES (101,'Aman','IT',50000);
INSERT INTO Employees (employee_id,name,department,salary) VALUES (102,'Riya','HR',45000);
SELECT * FROM Employees;
UPDATE Employees SET salary = 55000 WHERE employee_id = 101;
SELECT * FROM Employees WHERE employee_id = 101;
DELETE FROM Employees WHERE employee_id = 102;
SELECT * FROM Employees;
