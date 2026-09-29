console.log("Q1 - Student Database: RDBMS vs NoSQL");

const students = [
  { Student_ID: 1, Name: "Aarav", Course: "BCA", Semester: 1, Marks: 82 },
  { Student_ID: 2, Name: "Priya", Course: "BCA", Semester: 2, Marks: 88 },
  { Student_ID: 3, Name: "Rahul", Course: "BSc", Semester: 3, Marks: 76 },
  { Student_ID: 4, Name: "Ananya", Course: "BCA", Semester: 4, Marks: 91 },
  { Student_ID: 5, Name: "Vikram", Course: "BSc", Semester: 2, Marks: 79 }
];

console.log("\nStudent records:");
console.table(students);

console.log("\nRDBMS: Fixed table schema, rows and columns, strong structure.");
console.log("NoSQL: Document-based structure, flexible schema and easy expansion.");
console.log("RDBMS storage: Tables -> Rows -> Columns.");
console.log("NoSQL storage: Collections -> JSON-like Documents.");
console.log("Scalability: RDBMS commonly uses vertical scaling; NoSQL commonly supports horizontal scaling.");
