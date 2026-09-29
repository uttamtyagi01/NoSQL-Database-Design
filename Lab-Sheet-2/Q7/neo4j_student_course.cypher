// Create Student nodes
CREATE
(:Student {Student_ID: 1, Name: 'Aman'}),
(:Student {Student_ID: 2, Name: 'Riya'}),
(:Student {Student_ID: 3, Name: 'Rahul'}),
(:Student {Student_ID: 4, Name: 'Neha'}),
(:Student {Student_ID: 5, Name: 'Vikas'});

// Create Course nodes
CREATE
(:Course {Course_ID: 1, Name: 'BCA'}),
(:Course {Course_ID: 2, Name: 'BBA'}),
(:Course {Course_ID: 3, Name: 'MCA'});

// Create enrollment relationships
MATCH (s:Student {Student_ID: 1}), (c:Course {Name: 'BCA'})
CREATE (s)-[:ENROLLED_IN]->(c);

MATCH (s:Student {Student_ID: 2}), (c:Course {Name: 'BBA'})
CREATE (s)-[:ENROLLED_IN]->(c);

MATCH (s:Student {Student_ID: 3}), (c:Course {Name: 'BCA'})
CREATE (s)-[:ENROLLED_IN]->(c);

MATCH (s:Student {Student_ID: 4}), (c:Course {Name: 'MCA'})
CREATE (s)-[:ENROLLED_IN]->(c);

MATCH (s:Student {Student_ID: 5}), (c:Course {Name: 'BCA'})
CREATE (s)-[:ENROLLED_IN]->(c);

// Display all students
MATCH (s:Student)
RETURN s;

// Find students enrolled in BCA
MATCH (s:Student)-[:ENROLLED_IN]->(c:Course {Name: 'BCA'})
RETURN s.Name;

// Find courses for Aman
MATCH (s:Student {Name: 'Aman'})-[:ENROLLED_IN]->(c:Course)
RETURN c.Name;

// Add a relationship
MATCH (s:Student {Name: 'Aman'}), (c:Course {Name: 'MCA'})
CREATE (s)-[:ENROLLED_IN]->(c);

// Remove the relationship
MATCH (s:Student {Name: 'Aman'})-[r:ENROLLED_IN]->(c:Course {Name: 'MCA'})
DELETE r;
