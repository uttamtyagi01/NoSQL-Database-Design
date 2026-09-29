use("StudentDB");

db.Students.insertMany([
    {
        rollNumber: 102,
        name: "Priya Verma",
        department: "BCA",
        semester: 5,
        cgpa: 8.7
    },
    {
        rollNumber: 103,
        name: "Rahul Singh",
        department: "BCA",
        semester: 5,
        cgpa: 7.9
    },
    {
        rollNumber: 104,
        name: "Neha Gupta",
        department: "BBA",
        semester: 5,
        cgpa: 8.4
    },
    {
        rollNumber: 105,
        name: "Karan Mehta",
        department: "BCA",
        semester: 5,
        cgpa: 8.0
    }
]);

db.Students.find();
