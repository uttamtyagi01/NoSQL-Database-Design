use EventLogDB

db.Events.insertMany([
  {User_ID: 101, Event: "login", Timestamp: "2026-09-29T09:00:00"},
  {User_ID: 101, Event: "failed-login", Timestamp: "2026-09-29T09:05:00"},
  {User_ID: 101, Event: "failed-login", Timestamp: "2026-09-29T09:06:00"},
  {User_ID: 101, Event: "failed-login", Timestamp: "2026-09-29T09:07:00"},
  {User_ID: 101, Event: "logout", Timestamp: "2026-09-29T10:00:00"},
  {User_ID: 102, Event: "login", Timestamp: "2026-09-29T10:00:00"},
  {User_ID: 102, Event: "file-upload", Timestamp: "2026-09-29T10:10:00"},
  {User_ID: 103, Event: "password-change", Timestamp: "2026-09-29T11:00:00"},
  {User_ID: 104, Event: "failed-login", Timestamp: "2026-09-29T11:05:00"},
  {User_ID: 104, Event: "failed-login", Timestamp: "2026-09-29T11:06:00"}
])

db.Events.find({Event: "failed-login"})

db.Events.aggregate([
  {$match: {Event: "failed-login"}},
  {$group: {_id: "$User_ID", FailedAttempts: {$sum: 1}}},
  {$match: {FailedAttempts: {$gte: 2}}},
  {$sort: {FailedAttempts: -1}}
])

db.Events.aggregate([
  {$group: {_id: "$Event", TotalEvents: {$sum: 1}}},
  {$sort: {TotalEvents: -1}}
])
