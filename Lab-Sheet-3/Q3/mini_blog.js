use BlogDB

db.Blogs.insertMany([
  {
    Blog_ID: 1,
    Title: "Learning MongoDB",
    Author: "Aman",
    Category: "Database",
    Tags: ["MongoDB", "NoSQL", "Database"],
    Comments: [
      {User: "Riya", Comment: "Very useful article"}
    ],
    Publication: {Status: "Published", Date: "2026-09-20"}
  },
  {
    Blog_ID: 2,
    Title: "SQL for Beginners",
    Author: "Riya",
    Category: "Programming",
    Tags: ["SQL", "Database"],
    Comments: [
      {User: "Aman", Comment: "Good explanation"}
    ],
    Publication: {Status: "Published", Date: "2026-09-21"}
  },
  {
    Blog_ID: 3,
    Title: "Python Data Analysis",
    Author: "Rahul",
    Category: "Data Science",
    Tags: ["Python", "Pandas", "Data"],
    Comments: [],
    Publication: {Status: "Published", Date: "2026-09-22"}
  },
  {
    Blog_ID: 4,
    Title: "NoSQL Databases",
    Author: "Neha",
    Category: "Database",
    Tags: ["NoSQL", "MongoDB", "Cassandra"],
    Comments: [],
    Publication: {Status: "Draft", Date: "2026-09-23"}
  },
  {
    Blog_ID: 5,
    Title: "Power BI Basics",
    Author: "Vikas",
    Category: "Analytics",
    Tags: ["PowerBI", "Data", "Dashboard"],
    Comments: [],
    Publication: {Status: "Published", Date: "2026-09-24"}
  }
])

db.Blogs.find({Tags: "MongoDB"})

db.Blogs.find({
  Category: "Database",
  Tags: "MongoDB"
})

db.Blogs.find({
  Category: "Database",
  Tags: {$all: ["MongoDB", "NoSQL"]}
})

db.Blogs.find({
  Tags: {$in: ["Python", "SQL"]}
})
