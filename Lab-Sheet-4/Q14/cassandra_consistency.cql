-- Q14: Availability and consistency
CREATE KEYSPACE ConsistencyDB
WITH replication = {'class':'SimpleStrategy','replication_factor':3};
USE ConsistencyDB;
CREATE TABLE TestData (id int PRIMARY KEY, value text);

CONSISTENCY ONE;
INSERT INTO TestData (id,value) VALUES (1,'Write at ONE');
SELECT * FROM TestData WHERE id=1;

CONSISTENCY QUORUM;
INSERT INTO TestData (id,value) VALUES (2,'Write at QUORUM');
SELECT * FROM TestData WHERE id=2;

CONSISTENCY ALL;
INSERT INTO TestData (id,value) VALUES (3,'Write at ALL');
SELECT * FROM TestData WHERE id=3;

-- ONE gives higher availability/lower latency; QUORUM balances consistency and availability;
-- ALL requires all replicas and therefore has the strongest replica acknowledgement requirement.
