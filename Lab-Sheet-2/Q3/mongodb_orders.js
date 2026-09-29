use OrdersDB

db.Orders.insertMany([
  {
    Order_ID: 101,
    Customer: {Name: "Aman", Email: "aman@gmail.com"},
    Products: [
      {Name: "Laptop", Price: 50000, Quantity: 1},
      {Name: "Mouse", Price: 1000, Quantity: 2}
    ]
  },
  {
    Order_ID: 102,
    Customer: {Name: "Riya", Email: "riya@gmail.com"},
    Products: [
      {Name: "Phone", Price: 25000, Quantity: 1},
      {Name: "Cover", Price: 500, Quantity: 2}
    ]
  },
  {
    Order_ID: 103,
    Customer: {Name: "Rahul", Email: "rahul@gmail.com"},
    Products: [
      {Name: "Laptop", Price: 60000, Quantity: 1}
    ]
  },
  {
    Order_ID: 104,
    Customer: {Name: "Neha", Email: "neha@gmail.com"},
    Products: [
      {Name: "Tablet", Price: 20000, Quantity: 2}
    ]
  },
  {
    Order_ID: 105,
    Customer: {Name: "Vikas", Email: "vikas@gmail.com"},
    Products: [
      {Name: "Monitor", Price: 15000, Quantity: 1},
      {Name: "Keyboard", Price: 2000, Quantity: 1}
    ]
  }
])

db.Orders.find({ "Customer.Name": "Aman" })

db.Orders.updateOne(
  {Order_ID: 101, "Products.Name": "Mouse"},
  {$set: {"Products.$.Quantity": 3}}
)

db.Orders.aggregate([
  {
    $project: {
      Order_ID: 1,
      Customer: 1,
      TotalAmount: {
        $sum: {
          $map: {
            input: "$Products",
            as: "p",
            in: {$multiply: ["$$p.Price", "$$p.Quantity"]}
          }
        }
      }
    }
  }
])

db.Orders.aggregate([
  {
    $project: {
      Order_ID: 1,
      Customer: 1,
      TotalAmount: {
        $sum: {
          $map: {
            input: "$Products",
            as: "p",
            in: {$multiply: ["$$p.Price", "$$p.Quantity"]}
          }
        }
      }
    }
  },
  {$match: {TotalAmount: {$gt: 10000}}}
])
