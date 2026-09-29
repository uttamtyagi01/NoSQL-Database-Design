use("StudentDB");

db.Students.updateMany(
    { department: "BCA" },
    { $set: { semester: 6 } }
);

db.Students.find({
    department: "BCA"
});
