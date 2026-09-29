console.log("Q5 - Cassandra Student Database");

const queries = [
  `CREATE KEYSPACE IF NOT EXISTS CollegeDB
   WITH replication = {'class':'SimpleStrategy','replication_factor':1};`,

  `CREATE TABLE IF NOT EXISTS CollegeDB.Students
   (Student_ID int PRIMARY KEY, Name text, Course text,
    Semester int, Marks int);`,

  `INSERT INTO CollegeDB.Students
   (Student_ID, Name, Course, Semester, Marks)
   VALUES (1, 'Aarav', 'BCA', 1, 82);`,

  `INSERT INTO CollegeDB.Students
   (Student_ID, Name, Course, Semester, Marks)
   VALUES (2, 'Priya', 'BCA', 2, 88);`,

  `INSERT INTO CollegeDB.Students
   (Student_ID, Name, Course, Semester, Marks)
   VALUES (3, 'Rahul', 'BSc', 3, 76);`,

  `INSERT INTO CollegeDB.Students
   (Student_ID, Name, Course, Semester, Marks)
   VALUES (4, 'Ananya', 'BCA', 4, 91);`,

  `INSERT INTO CollegeDB.Students
   (Student_ID, Name, Course, Semester, Marks)
   VALUES (5, 'Vikram', 'BSc', 2, 79);`,

  `SELECT * FROM CollegeDB.Students;`,
  `SELECT * FROM CollegeDB.Students WHERE Student_ID = 1;`,
  `UPDATE CollegeDB.Students SET Marks = 95 WHERE Student_ID = 1;`,
  `DELETE FROM CollegeDB.Students WHERE Student_ID = 5;`
];

queries.forEach((query, index) => {
  console.log(`\nQuery ${index + 1}:`);
  console.log(query);
});
