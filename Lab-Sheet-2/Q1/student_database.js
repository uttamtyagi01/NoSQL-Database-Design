// LAB SHEET-2 - Q1
// RDBMS vs NoSQL Document Model

// MYSQL

CREATE DATABASE CollegeDB;
USE CollegeDB;

CREATE TABLE Student (
    Student_ID INT PRIMARY KEY,
    Name VARCHAR(50),
    Course VARCHAR(50),
    Semester INT,
    Marks INT
);

INSERT INTO Student VALUES
(1,'Aman','BCA',3,82),
(2,'Riya','BCA',3,88),
(3,'Rahul','BBA',4,75),
(4,'Neha','BCA',4,91),
(5,'Vikas','BBA',4,79);

SELECT * FROM Student;


/* MONGODB

use CollegeDB

db.Students.insertMany([
 {Student_ID:1, Name:"Aman", Course:"BCA", Semester:3, Marks:82},
 {Student_ID:2, Name:"Riya", Course:"BCA", Semester:3, Marks:88},
 {Student_ID:3, Name:"Rahul", Course:"BBA", Semester:4, Marks:75},
 {Student_ID:4, Name:"Neha", Course:"BCA", Semester:4, Marks:91},
 {Student_ID:5, Name:"Vikas", Course:"BBA", Semester:4, Marks:79}
])

db.Students.find()
*/


/*
COMPARISON

1. Schema:
MySQL uses a predefined table schema.
MongoDB uses flexible document-based schema.

2. Data Storage:
MySQL stores data in rows and columns.
MongoDB stores data as BSON documents.

3. Flexibility:
MySQL follows a fixed structure.
MongoDB allows documents with different structures.

4. Scalability:
MySQL commonly uses relational scaling techniques.
MongoDB supports horizontal scaling using sharding.

5. Suitable Use:
MySQL is suitable for structured relational data.
MongoDB is suitable for flexible and document-oriented data.
*/
