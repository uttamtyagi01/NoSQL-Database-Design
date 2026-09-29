CREATE KEYSPACE CollegeDB
WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1};

USE CollegeDB;

CREATE TABLE Students (
    Student_ID int PRIMARY KEY,
    Name text,
    Age int,
    Course text,
    Marks int
);

INSERT INTO Students VALUES (1, 'Aman', 20, 'BCA', 78);
INSERT INTO Students VALUES (2, 'Riya', 21, 'BBA', 85);
INSERT INTO Students VALUES (3, 'Rahul', 20, 'BCA', 72);
INSERT INTO Students VALUES (4, 'Neha', 22, 'MCA', 91);
INSERT INTO Students VALUES (5, 'Vikas', 21, 'BCA', 88);

SELECT * FROM Students;

SELECT * FROM Students WHERE Course = 'BCA' ALLOW FILTERING;

UPDATE Students SET Marks = 90 WHERE Student_ID = 1;

DELETE FROM Students WHERE Student_ID = 5;
