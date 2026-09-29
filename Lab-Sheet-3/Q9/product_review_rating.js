use ProductReviewDB

db.Reviews.insertMany([
  {Product_ID:1, Product:"Laptop", Customer:"Aman", Rating:5, Review:"Excellent product"},
  {Product_ID:1, Product:"Laptop", Customer:"Riya", Rating:4, Review:"Very good"},
  {Product_ID:1, Product:"Laptop", Customer:"Rahul", Rating:5, Review:"Great laptop"},
  {Product_ID:2, Product:"Mobile", Customer:"Neha", Rating:4, Review:"Good phone"},
  {Product_ID:2, Product:"Mobile", Customer:"Vikas", Rating:3, Review:"Average phone"},
  {Product_ID:3, Product:"Camera", Customer:"Aman", Rating:5, Review:"Excellent camera"},
  {Product_ID:3, Product:"Camera", Customer:"Riya", Rating:4, Review:"Good camera"}
])

db.Reviews.find()

db.Reviews.aggregate([
  {
    $group:{
      _id:"$Product_ID",
      Product:{$first:"$Product"},
      AverageRating:{$avg:"$Rating"},
      NumberOfReviews:{$sum:1}
    }
  },
  {$sort:{AverageRating:-1}}
])
