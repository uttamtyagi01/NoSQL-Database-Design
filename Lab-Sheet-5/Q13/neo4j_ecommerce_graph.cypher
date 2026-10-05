// Q13 Neo4j - e-commerce graph
CREATE (c:Customer {id:1,name:'Aman'})
CREATE (p1:Product {id:'P1',name:'Laptop'})
CREATE (p2:Product {id:'P2',name:'Mouse'})
CREATE (cat:Category {name:'Electronics'})
CREATE (o:Order {id:'O101',date:'2026-10-05'})
CREATE (p1)-[:IN_CATEGORY]->(cat)
CREATE (p2)-[:IN_CATEGORY]->(cat)
CREATE (c)-[:PLACED]->(o)
CREATE (o)-[:CONTAINS]->(p1)
CREATE (o)-[:CONTAINS]->(p2)
MATCH (c:Customer {name:'Aman'})-[:PLACED]->(:Order)-[:CONTAINS]->(p:Product) RETURN DISTINCT p;
