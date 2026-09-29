console.log("Q9 - MongoDB Local Deployment");

const commands = [
  "mongod --dbpath ./data",
  "mongosh",
  "use CollegeDB",
  "db.Students.insertMany([",
  "  {Student_ID:1, Name:'Aarav', Course:'BCA', Marks:82},",
  "  {Student_ID:2, Name:'Priya', Course:'BCA', Marks:88},",
  "  {Student_ID:3, Name:'Rahul', Course:'BSc', Marks:76},",
  "  {Student_ID:4, Name:'Ananya', Course:'BCA', Marks:91},",
  "  {Student_ID:5, Name:'Vikram', Course:'BSc', Marks:79}",
  "])",
  "db.Students.find()",
  "db.Students.findOne({Student_ID:1})",
  "db.Students.updateOne({Student_ID:1}, {$set:{Marks:95}})",
  "db.Students.deleteOne({Student_ID:5})",
  "db.Students.countDocuments()"
];

commands.forEach(command => console.log(command));
