// Q12 Neo4j - social network
CREATE (a:Person {name:'Aman'})
CREATE (b:Person {name:'Riya'})
CREATE (c:Person {name:'Rahul'})
CREATE (co:Company {name:'TechCorp'})
CREATE (a)-[:FRIENDS_WITH]->(b)
CREATE (b)-[:FOLLOWS]->(c)
CREATE (a)-[:WORKS_AT]->(co)
MATCH (p:Person {name:'Aman'})-[:FRIENDS_WITH]->(friend) RETURN friend;
MATCH (p:Person {name:'Rahul'})<-[:FOLLOWS]-(follower) RETURN follower;
