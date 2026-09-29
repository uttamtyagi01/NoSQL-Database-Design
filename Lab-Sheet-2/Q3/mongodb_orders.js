const { MongoClient } = require("mongodb");

const client = new MongoClient("mongodb://127.0.0.1:27017");

async function main() {
  try {
    await client.connect();

    const db = client.db("CollegeDB");
    const orders = db.collection("Orders");

    await orders.deleteMany({});

    await orders.insertMany([
      {
        Order_ID: 1,
        Customer: { Name: "Aarav", City: "Delhi" },
        Products: [
          { Name: "Laptop", Quantity: 1, Price: 50000 },
          { Name: "Mouse", Quantity: 2, Price: 800 }
        ]
      },
      {
        Order_ID: 2,
        Customer: { Name: "Priya", City: "Dehradun" },
        Products: [
          { Name: "Keyboard", Quantity: 1, Price: 1500 },
          { Name: "Monitor", Quantity: 1, Price: 12000 }
        ]
      },
      {
        Order_ID: 3,
        Customer: { Name: "Rahul", City: "Delhi" },
        Products: [
          { Name: "Phone", Quantity: 1, Price: 25000 }
        ]
      },
      {
        Order_ID: 4,
        Customer: { Name: "Ananya", City: "Jaipur" },
        Products: [
          { Name: "Tablet", Quantity: 2, Price: 18000 }
        ]
      },
      {
        Order_ID: 5,
        Customer: { Name: "Vikram", City: "Dehradun" },
        Products: [
          { Name: "Headphones", Quantity: 2, Price: 2500 }
        ]
      }
    ]);

    console.log("Orders of Aarav:");
    console.dir(
      await orders.find({ "Customer.Name": "Aarav" }).toArray(),
      { depth: null }
    );

    await orders.updateOne(
      { Order_ID: 1, "Products.Name": "Mouse" },
      { $set: { "Products.$.Quantity": 3 } }
    );

    const totals = await orders.aggregate([
      { $unwind: "$Products" },
      {
        $group: {
          _id: "$Order_ID",
          TotalAmount: {
            $sum: {
              $multiply: [
                "$Products.Quantity",
                "$Products.Price"
              ]
            }
          }
        }
      }
    ]).toArray();

    console.log("\nTotal order amount:");
    console.table(totals);

    console.log("\nOrders above ₹20000:");
    console.table(
      totals.filter(order => order.TotalAmount > 20000)
    );

  } finally {
    await client.close();
  }
}

main().catch(console.error);
