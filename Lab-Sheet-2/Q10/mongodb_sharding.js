console.log("Q10 - MongoDB Sharding Demonstration");

const students = Array.from({ length: 20 }, (_, index) => ({
  Student_ID: index + 1,
  Name: `Student${index + 1}`,
  Course: index % 2 === 0 ? "BCA" : "BSc",
  Marks: 60 + (index % 41)
}));

console.table(students);

console.log("\nRecommended shard key: Student_ID");
console.log("Shard key should provide good distribution of documents.");

console.log("\nMongoDB commands:");
console.log("sh.enableSharding('CollegeDB')");
console.log("sh.shardCollection('CollegeDB.Students', {Student_ID: 1})");
console.log("sh.status()");

console.log("\nBenefit of sharding:");
console.log("Data and workload can be distributed across multiple servers.");
