const redis = require("redis");

async function main() {
  const client = redis.createClient({
    url: "redis://127.0.0.1:6379"
  });

  client.on("error", err => console.error("Redis Error:", err));

  await client.connect();

  await client.del(
    "student:101",
    "student:102",
    "student:103",
    "student:104",
    "student:105"
  );

  await client.set("student:101", "Aarav");
  await client.set("student:102", "Priya");
  await client.set("student:103", "Rahul");
  await client.set("student:104", "Ananya");
  await client.set("student:105", "Vikram");

  console.log("Student 101:", await client.get("student:101"));

  await client.set("student:101", "Aarav Sharma");
  console.log("Updated Student 101:", await client.get("student:101"));

  await client.del("student:105");

  const keys = await client.keys("student:*");
  console.log("Available keys:", keys);

  await client.quit();
}

main().catch(console.error);
