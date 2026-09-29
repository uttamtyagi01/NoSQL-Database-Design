use ContentDB

db.Articles.insertMany([
  {
    Article_ID:1,
    Title:"Introduction to MongoDB",
    Author:"Aman",
    Category:"Database",
    Tags:["MongoDB","NoSQL"],
    Status:"Published",
    Publication_Date:"2026-09-20"
  },
  {
    Article_ID:2,
    Title:"Learning SQL",
    Author:"Riya",
    Category:"Database",
    Tags:["SQL","Database"],
    Status:"Published",
    Publication_Date:"2026-09-21"
  },
  {
    Article_ID:3,
    Title:"Python Basics",
    Author:"Rahul",
    Category:"Programming",
    Tags:["Python","Programming"],
    Status:"Draft",
    Publication_Date:null
  },
  {
    Article_ID:4,
    Title:"Data Analytics",
    Author:"Neha",
    Category:"Analytics",
    Tags:["Data","Analytics"],
    Status:"Published",
    Publication_Date:"2026-09-23"
  },
  {
    Article_ID:5,
    Title:"NoSQL Concepts",
    Author:"Vikas",
    Category:"Database",
    Tags:["NoSQL","Database"],
    Status:"Draft",
    Publication_Date:null
  }
])

db.Articles.find({Status:"Published"})

db.Articles.find({Status:"Unpublished"})

db.Articles.find({Status:"Draft"})

db.Articles.find({
  Status:"Published",
  Category:"Database"
})

db.Articles.find({
  Status:"Published",
  Tags:"NoSQL"
})

db.Articles.find({
  Status:"Draft",
  Category:"Database"
})
