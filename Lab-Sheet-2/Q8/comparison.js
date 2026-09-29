console.log("Q8 - MongoDB vs Cassandra vs Neo4j");

const comparison = [
  {
    Database: "MongoDB",
    DataModel: "Document",
    Storage: "Collections and JSON-like documents",
    QueryMethod: "MongoDB Query Language",
    Scalability: "Horizontal scaling through sharding",
    Applications: "Flexible application data"
  },
  {
    Database: "Cassandra",
    DataModel: "Wide-column",
    Storage: "Rows grouped into column families",
    QueryMethod: "CQL",
    Scalability: "Highly scalable distributed architecture",
    Applications: "Large distributed datasets"
  },
  {
    Database: "Neo4j",
    DataModel: "Graph",
    Storage: "Nodes and relationships",
    QueryMethod: "Cypher",
    Scalability: "Distributed graph deployments",
    Applications: "Relationship-heavy data"
  }
];

console.table(comparison);
