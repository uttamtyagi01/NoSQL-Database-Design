use StudentActivityDB

db.Students.insertMany([
  {
    Student_ID: 1,
    Name: "Aman",
    Age: 20,
    Courses: ["MongoDB", "SQL"],
    Attendance: {MongoDB: 90, SQL: 85},
    Skills: ["JavaScript", "SQL"],
    RecentActivities: [
      {Activity: "Login", Date: "2026-09-28"},
      {Activity: "Course Completed", Date: "2026-09-27"}
    ]
  },
  {
    Student_ID: 2,
    Name: "Riya",
    Age: 21,
    Courses: ["Python", "MongoDB"],
    Attendance: {Python: 92, MongoDB: 88},
    Skills: ["Python", "Pandas"],
    RecentActivities: [
      {Activity: "Assignment Submitted", Date: "2026-09-28"}
    ]
  },
  {
    Student_ID: 3,
    Name: "Rahul",
    Age: 20,
    Courses: ["SQL", "Power BI"],
    Attendance: {SQL: 78, PowerBI: 82},
    Skills: ["SQL", "Excel"],
    RecentActivities: [
      {Activity: "Login", Date: "2026-09-29"},
      {Activity: "Quiz Completed", Date: "2026-09-28"}
    ]
  },
  {
    Student_ID: 4,
    Name: "Neha",
    Age: 22,
    Courses: ["MongoDB", "Python"],
    Attendance: {MongoDB: 95, Python: 90},
    Skills: ["Python", "MongoDB"],
    RecentActivities: [
      {Activity: "Project Submitted", Date: "2026-09-29"}
    ]
  },
  {
    Student_ID: 5,
    Name: "Vikas",
    Age: 21,
    Courses: ["SQL", "MongoDB"],
    Attendance: {SQL: 88, MongoDB: 91},
    Skills: ["SQL", "MongoDB"],
    RecentActivities: [
      {Activity: "Login", Date: "2026-09-29"}
    ]
  }
])

db.Students.find()

db.Students.find({Skills: "MongoDB"})

db.Students.find({"Attendance.MongoDB": {$gte: 90}})

db.Students.find({
  RecentActivities: {
    $elemMatch: {Activity: "Project Submitted"}
  }
})

db.Students.find({
  RecentActivities: {
    $elemMatch: {Activity: "Login", Date: "2026-09-29"}
  }
})
