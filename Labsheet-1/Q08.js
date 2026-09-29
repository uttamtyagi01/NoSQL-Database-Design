use("StudentDB");

db.Students.find(
    {},
    {
        _id: 0,
        name: 1,
        department: 1
    }
);
