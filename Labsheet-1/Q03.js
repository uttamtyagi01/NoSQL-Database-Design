use("StudentDB");

db.Students.insertOne({
    rollNumber: 101,
    name: "Aarav Sharma",
    department: "BCA",
    semester: 5,
    cgpa: 8.2
});

db.Students.findOne({ rollNumber: 101 });
