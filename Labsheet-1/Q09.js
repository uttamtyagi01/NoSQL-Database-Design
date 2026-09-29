use("StudentDB");

db.Students.updateOne(
    { rollNumber: 103 },
    { $set: { department: "MCA" } }
);

db.Students.findOne({
    rollNumber: 103
});
