# Q10 - MongoDB Sharding

## Objective
Store 20 student records and demonstrate MongoDB sharding using a shard key.

## 1. Create Database

    use ShardingDB

## 2. Insert 20 Student Records

    db.Students.insertMany([
      {Student_ID: 1, Name: "Student1", Course: "BCA"},
      {Student_ID: 2, Name: "Student2", Course: "BBA"},
      {Student_ID: 3, Name: "Student3", Course: "BCA"},
      {Student_ID: 4, Name: "Student4", Course: "MCA"},
      {Student_ID: 5, Name: "Student5", Course: "BCA"},
      {Student_ID: 6, Name: "Student6", Course: "BBA"},
      {Student_ID: 7, Name: "Student7", Course: "BCA"},
      {Student_ID: 8, Name: "Student8", Course: "MCA"},
      {Student_ID: 9, Name: "Student9", Course: "BCA"},
      {Student_ID: 10, Name: "Student10", Course: "BBA"},
      {Student_ID: 11, Name: "Student11", Course: "BCA"},
      {Student_ID: 12, Name: "Student12", Course: "MCA"},
      {Student_ID: 13, Name: "Student13", Course: "BCA"},
      {Student_ID: 14, Name: "Student14", Course: "BBA"},
      {Student_ID: 15, Name: "Student15", Course: "BCA"},
      {Student_ID: 16, Name: "Student16", Course: "MCA"},
      {Student_ID: 17, Name: "Student17", Course: "BCA"},
      {Student_ID: 18, Name: "Student18", Course: "BBA"},
      {Student_ID: 19, Name: "Student19", Course: "BCA"},
      {Student_ID: 20, Name: "Student20", Course: "MCA"}
    ])

## 3. Select a Shard Key

    {Student_ID: 1}

Student_ID is used as the shard key in this example.

## 4. Sharding Configuration

A complete MongoDB sharded deployment requires:

- Config server replica set
- One or more shard replica sets
- mongos router

Connect to the deployment through mongos.

Enable sharding:

    sh.enableSharding("ShardingDB")

Shard the Students collection:

    sh.shardCollection(
      "ShardingDB.Students",
      {Student_ID: 1}
    )

## 5. Verify Sharding

    sh.status()

To check collection distribution:

    db.Students.getShardDistribution()

## 6. Benefit of Sharding

Sharding distributes data across multiple servers. It can increase storage
capacity and support horizontal scaling for large datasets.

## Result

MongoDB sharding can distribute a collection across multiple shards using
a selected shard key. A complete sharded deployment requires the MongoDB
sharding infrastructure; inserting 20 records alone does not create a
sharded deployment.
