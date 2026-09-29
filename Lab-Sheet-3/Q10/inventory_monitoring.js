use InventoryDB

db.Inventory.insertMany([
  {
    Product_ID:1,
    Product:"Laptop",
    Stock:5,
    MinimumStock:10,
    Supplier:"ABC Electronics",
    RestockingDate:"2026-10-01"
  },
  {
    Product_ID:2,
    Product:"Mobile",
    Stock:20,
    MinimumStock:10,
    Supplier:"XYZ Mobiles",
    RestockingDate:"2026-10-05"
  },
  {
    Product_ID:3,
    Product:"Camera",
    Stock:3,
    MinimumStock:8,
    Supplier:"Camera World",
    RestockingDate:"2026-09-30"
  },
  {
    Product_ID:4,
    Product:"Keyboard",
    Stock:7,
    MinimumStock:5,
    Supplier:"ABC Electronics",
    RestockingDate:"2026-10-10"
  },
  {
    Product_ID:5,
    Product:"Monitor",
    Stock:2,
    MinimumStock:6,
    Supplier:"Display Tech",
    RestockingDate:"2026-09-29"
  }
])

db.Inventory.find()

db.Inventory.find({
  $expr:{$lte:["$Stock","$MinimumStock"]}
})

db.Inventory.find({
  Stock:{$lt:5}
})

db.Inventory.find({
  $expr:{$lt:["$Stock","$MinimumStock"]}
}).sort({Stock:1})
