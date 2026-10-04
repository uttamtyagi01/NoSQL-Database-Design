-- Q11: Cassandra CollegeDB and Students
CREATE KEYSPACE CollegeDB
WITH replication = {'class':'SimpleStrategy','replication_factor':3};

USE CollegeDB;

CREATE TABLE Students (
  student_id int PRIMARY KEY,
  name text,
  age int,
  course text,
  marks int
);

INSERT INTO Students (student_id,name,age,course,marks) VALUES (1,'Aman',20,'BCA',82);
INSERT INTO Students (student_id,name,age,course,marks) VALUES (2,'Riya',21,'BCA',88);
INSERT INTO Students (student_id,name,age,course,marks) VALUES (3,'Rahul',20,'BCA',75);
INSERT INTO Students (student_id,name,age,course,marks) VALUES (4,'Neha',22,'BCA',91);
INSERT INTO Students (student_id,name,age,course,marks) VALUES (5,'Vikas',21,'BCA',79);
SELECT * FROM Students;
