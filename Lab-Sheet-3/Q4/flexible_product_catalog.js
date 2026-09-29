use ProductCatalogDB

db.Products.insertMany([
  {
    Product_ID: 1,
    Name: "Dell Inspiron",
    Category: "Laptop",
    Price: 65000,
    RAM: "16GB",
    Storage: "512GB SSD",
    Processor: "Intel i5"
  },
  {
    Product_ID: 2,
    Name: "HP Pavilion",
    Category: "Laptop",
    Price: 72000,
    RAM: "16GB",
    Storage: "1TB SSD",
    Processor: "Intel i7"
  },
  {
    Product_ID: 3,
    Name: "Samsung Galaxy",
    Category: "Mobile",
    Price: 35000,
    ScreenSize: "6.5 inch",
    Camera: "50MP",
    Battery: "5000mAh"
  },
  {
    Product_ID: 4,
    Name: "iPhone",
    Category: "Mobile",
    Price: 70000,
    ScreenSize: "6.1 inch",
    Camera: "48MP",
    Battery: "4000mAh"
  },
  {
    Product_ID: 5,
    Name: "Canon EOS",
    Category: "Camera",
    Price: 85000,
    Lens: "18-55mm",
    Megapixels: "24MP",
    Sensor: "APS-C"
  }
])

db.Products.find({Category: "Laptop"})

db.Products.find({
  Category: "Laptop",
  RAM: "16GB"
})

db.Products.find({
  Category: "Mobile",
  Camera: "50MP"
})

db.Products.find({
  Category: "Camera",
  Megapixels: "24MP"
})

db.Products.find({Price: {$gt: 60000}})
