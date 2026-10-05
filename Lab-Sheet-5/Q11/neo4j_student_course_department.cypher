// Q11 Neo4j - Student, Course and Department
CREATE (s1:Student {id:1,name:'Aman'})
CREATE (s2:Student {id:2,name:'Riya'})
CREATE (c1:Course {id:'C01',name:'MongoDB'})
CREATE (c2:Course {id:'C02',name:'SQL'})
CREATE (d:Department {id:'D01',name:'Computer Science'})
CREATE (s1)-[:ENROLLED_IN]->(c1)
CREATE (s2)-[:ENROLLED_IN]->(c2)
CREATE (c1)-[:OFFERED_BY]->(d)
CREATE (c2)-[:OFFERED_BY]->(d)
MATCH (n) RETURN n;
MATCH (s:Student)-[:ENROLLED_IN]->(c:Course) RETURN s,c;
