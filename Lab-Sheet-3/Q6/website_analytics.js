use WebsiteAnalyticsDB

db.Visits.insertMany([
  {Page:"/home", User_ID:101, Device:"Mobile", Browser:"Chrome", Location:"Delhi", Timestamp:"2026-09-29T09:00:00"},
  {Page:"/products", User_ID:102, Device:"Desktop", Browser:"Chrome", Location:"Mumbai", Timestamp:"2026-09-29T09:05:00"},
  {Page:"/home", User_ID:103, Device:"Mobile", Browser:"Safari", Location:"Delhi", Timestamp:"2026-09-29T09:10:00"},
  {Page:"/about", User_ID:104, Device:"Tablet", Browser:"Chrome", Location:"Dehradun", Timestamp:"2026-09-29T09:15:00"},
  {Page:"/products", User_ID:105, Device:"Mobile", Browser:"Chrome", Location:"Pune", Timestamp:"2026-09-29T09:20:00"},
  {Page:"/home", User_ID:106, Device:"Desktop", Browser:"Edge", Location:"Delhi", Timestamp:"2026-09-29T09:25:00"},
  {Page:"/products", User_ID:107, Device:"Mobile", Browser:"Chrome", Location:"Jaipur", Timestamp:"2026-09-29T09:30:00"},
  {Page:"/contact", User_ID:108, Device:"Desktop", Browser:"Firefox", Location:"Delhi", Timestamp:"2026-09-29T09:35:00"},
  {Page:"/home", User_ID:109, Device:"Mobile", Browser:"Safari", Location:"Mumbai", Timestamp:"2026-09-29T09:40:00"},
  {Page:"/products", User_ID:110, Device:"Mobile", Browser:"Chrome", Location:"Delhi", Timestamp:"2026-09-29T09:45:00"}
])

db.Visits.aggregate([
  {$group: {_id:"$Page", TotalVisits:{$sum:1}}},
  {$sort:{TotalVisits:-1}}
])

db.Visits.aggregate([
  {$group: {_id:"$Device", TotalVisits:{$sum:1}}},
  {$sort:{TotalVisits:-1}}
])
