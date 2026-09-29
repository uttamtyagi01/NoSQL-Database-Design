console.log("Q7 - Neo4j Student-Course Graph");

const cypherQueries = [

`CREATE
(s1:Student {id:1, name:'Aarav'}),
(s2:Student {id:2, name:'Priya'}),
(s3:Student {id:3, name:'Rahul'}),
(s4:Student {id:4, name:'Ananya'}),
(s5:Student {id:5, name:'Vikram'}),

(c1:Course {name:'BCA'}),
(c2:Course {name:'BSc'}),
(c3:Course {name:'MCA'})`,

`MATCH (s:Student {id:1}), (c:Course {name:'BCA'})
CREATE (s)-[:ENROLLED_IN]->(c)`,

`MATCH (s:Student {id:2}), (c:Course {name:'BCA'})
CREATE (s)-[:ENROLLED_IN]->(c)`,

`MATCH (s:Student {id:3}), (c:Course {name:'BSc'})
CREATE (s)-[:ENROLLED_IN]->(c)`,

`MATCH (s:Student {id:4}), (c:Course {name:'MCA'})
CREATE (s)-[:ENROLLED_IN]->(c)`,

`MATCH (s:Student {id:5}), (c:Course {name:'BSc'})
CREATE (s)-[:ENROLLED_IN]->(c)`,

`MATCH (s:Student)
RETURN s`,

`MATCH (s:Student)-[:ENROLLED_IN]->(c:Course {name:'BCA'})
RETURN s`,

`MATCH (s:Student {id:1})-[:ENROLLED_IN]->(c)
RETURN c`,

`MATCH (s:Student {id:1}), (c:Course {name:'MCA'})
CREATE (s)-[:ENROLLED_IN]->(c)`,

`MATCH (s:Student {id:1})-[r:ENROLLED_IN]->(c:Course {name:'MCA'})
DELETE r`
];

cypherQueries.forEach((query, index) => {
  console.log(`\nCypher Query ${index + 1}:\n${query}`);
});
