# Q9 - MongoDB Single-Server / Local Deployment

## Objective
Deploy MongoDB on a local/single server and perform CRUD operations.

## 1. Installation and Verification

Install MongoDB Community Edition according to the operating system.

Verify installation:

    mongod --version
    mongosh --version

## 2. Start MongoDB

For Linux systems using systemd:

    sudo systemctl start mongod
    sudo systemctl status mongod

For a manual installation, start the MongoDB server using the appropriate mongod command.

## 3. Connect to MongoDB

    mongosh

## 4. Create Database and Collection

    use CollegeDB
    db.createCollection("Students")

## 5. Insert Records

    db.Students.insertMany([
      {Student_ID: 1, Name: "Aman", Course: "BCA", Marks: 78},
      {Student_ID: 2, Name: "Riya", Course: "BBA", Marks: 85},
      {Student_ID: 3, Name: "Rahul", Course: "BCA", Marks: 72},
      {Student_ID: 4, Name: "Neha", Course: "MCA", Marks: 91},
      {Student_ID: 5, Name: "Vikas", Course: "BCA", Marks: 88}
    ])

## 6. CRUD Operations

Create:

    db.Students.insertOne({Student_ID: 6, Name: "Karan", Course: "BCA", Marks: 80})

Read:

    db.Students.find()

Update:

    db.Students.updateOne(
      {Student_ID: 1},
      {$set: {Marks: 90}}
    )

Delete:

    db.Students.deleteOne({Student_ID: 6})

## 7. Verification

    show dbs
    show collections
    db.Students.find()

## Result
MongoDB can be deployed locally as a single-server database and used for
database creation, collection creation and CRUD operations.
