const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

async function main() {
  try {
    await client.connect();

    const db = client.db("CollegeDB");
    const students = db.collection("Students");

    await students.deleteMany({});

    await students.insertMany([
      { Student_ID: 1, Name: "Aarav", Course: "BCA", Semester: 1, Marks: 82 },
      { Student_ID: 2, Name: "Priya", Course: "BCA", Semester: 2, Marks: 88 },
      { Student_ID: 3, Name: "Rahul", Course: "BSc", Semester: 3, Marks: 76 },
      { Student_ID: 4, Name: "Ananya", Course: "BCA", Semester: 4, Marks: 91 },
      { Student_ID: 5, Name: "Vikram", Course: "BSc", Semester: 2, Marks: 79 }
    ]);

    console.log("All documents:");
    console.table(await students.find().toArray());

    console.log("\nBCA students:");
    console.table(await students.find({ Course: "BCA" }).toArray());

    await students.updateOne(
      { Student_ID: 3 },
      { $set: { Marks: 85 } }
    );

    await students.deleteOne({ Student_ID: 5 });

    console.log("\nTotal students:", await students.countDocuments());
    console.log("\nFinal documents:");
    console.table(await students.find().toArray());

  } finally {
    await client.close();
  }
}

main().catch(console.error);
