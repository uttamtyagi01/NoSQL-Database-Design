use EcommerceDB

db.Customers.insertMany([
  {Customer_ID: 1, Name: "Aman", Email: "aman@gmail.com"},
  {Customer_ID: 2, Name: "Riya", Email: "riya@gmail.com"},
  {Customer_ID: 3, Name: "Rahul", Email: "rahul@gmail.com"},
  {Customer_ID: 4, Name: "Neha", Email: "neha@gmail.com"},
  {Customer_ID: 5, Name: "Vikas", Email: "vikas@gmail.com"}
])

db.Products.insertMany([
  {Product_ID: 1, Name: "Laptop", Price: 50000},
  {Product_ID: 2, Name: "Phone", Price: 30000},
  {Product_ID: 3, Name: "Mouse", Price: 1000},
  {Product_ID: 4, Name: "Keyboard", Price: 2000},
  {Product_ID: 5, Name: "Monitor", Price: 15000}
])

db.Orders.insertMany([
  {
    Order_ID: 101,
    Customer_ID: 1,
    Products: [
      {Product_ID: 1, Quantity: 1},
      {Product_ID: 3, Quantity: 2}
    ]
  },
  {
    Order_ID: 102,
    Customer_ID: 2,
    Products: [
      {Product_ID: 2, Quantity: 1}
    ]
  },
  {
    Order_ID: 103,
    Customer_ID: 1,
    Products: [
      {Product_ID: 4, Quantity: 2}
    ]
  },
  {
    Order_ID: 104,
    Customer_ID: 3,
    Products: [
      {Product_ID: 5, Quantity: 1}
    ]
  },
  {
    Order_ID: 105,
    Customer_ID: 4,
    Products: [
      {Product_ID: 2, Quantity: 2}
    ]
  }
])

db.Orders.find({Customer_ID: 1})

db.Orders.aggregate([
  {
    $project: {
      Order_ID: 1,
      Customer_ID: 1,
      Total: {
        $sum: {
          $map: {
            input: "$Products",
            as: "p",
            in: {$multiply: ["$$p.Product_ID", "$$p.Quantity"]}
          }
        }
      }
    }
  }
])

db.Orders.find().sort({Order_ID: 1})
