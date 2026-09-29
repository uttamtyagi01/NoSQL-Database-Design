use CollegeDB

db.Students.insertMany([
  {Student_ID: 1, Name: "Aman", Age: 20, Course: "BCA", Marks: 78},
  {Student_ID: 2, Name: "Riya", Age: 21, Course: "BBA", Marks: 85},
  {Student_ID: 3, Name: "Rahul", Age: 20, Course: "BCA", Marks: 72},
  {Student_ID: 4, Name: "Neha", Age: 22, Course: "MCA", Marks: 91},
  {Student_ID: 5, Name: "Vikas", Age: 21, Course: "BCA", Marks: 88}
])

db.Students.find()

db.Students.find({Course: "BCA"})

db.Students.updateOne(
  {Student_ID: 1},
  {$set: {Marks: 90}}
)

db.Students.deleteOne({Student_ID: 5})

db.Students.countDocuments()
