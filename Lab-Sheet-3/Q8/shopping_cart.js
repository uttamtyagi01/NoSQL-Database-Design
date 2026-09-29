use ShoppingCartDB

db.Carts.insertOne({
  Cart_ID:1,
  Customer_ID:101,
  Products:[
    {Product_ID:1, Name:"Laptop", Price:50000, Quantity:1},
    {Product_ID:2, Name:"Mouse", Price:1000, Quantity:2}
  ]
})

db.Carts.find({Cart_ID:1})

db.Carts.updateOne(
  {Cart_ID:1, "Products.Product_ID":2},
  {$set:{"Products.$.Quantity":3}}
)

db.Carts.updateOne(
  {Cart_ID:1},
  {$push:{
    Products:{Product_ID:3, Name:"Keyboard", Price:2000, Quantity:1}
  }}
)

db.Carts.updateOne(
  {Cart_ID:1},
  {$pull:{Products:{Product_ID:3}}}
)

db.Carts.aggregate([
  {$match:{Cart_ID:1}},
  {
    $project:{
      Customer_ID:1,
      CartValue:{
        $sum:{
          $map:{
            input:"$Products",
            as:"p",
            in:{$multiply:["$$p.Price","$$p.Quantity"]}
          }
        }
      }
    }
  }
])
