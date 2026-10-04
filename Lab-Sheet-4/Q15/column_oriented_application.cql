-- Q15: Column-oriented NoSQL application - Event Logging using Cassandra
CREATE KEYSPACE EventApp
WITH replication = {'class':'SimpleStrategy','replication_factor':3};
USE EventApp;

CREATE TABLE Events (
  user_id text,
  event_time timestamp,
  event_id text,
  event_type text,
  status text,
  PRIMARY KEY ((user_id), event_time, event_id)
) WITH CLUSTERING ORDER BY (event_time DESC);

INSERT INTO Events VALUES ('U101','2026-10-04 09:00:00','E001','login','success');
INSERT INTO Events VALUES ('U101','2026-10-04 09:05:00','E002','failed-login','failed');
SELECT * FROM Events WHERE user_id='U101';
UPDATE Events SET status='resolved' WHERE user_id='U101' AND event_time='2026-10-04 09:05:00' AND event_id='E002';
DELETE FROM Events WHERE user_id='U101' AND event_time='2026-10-04 09:00:00' AND event_id='E001';
SELECT * FROM Events WHERE user_id='U101';

-- Consistency is configurable through CQL consistency levels.
-- Replication and multiple nodes support availability and horizontal scaling.
-- Cassandra transactions are limited compared with relational databases; lightweight transactions
-- can provide conditional updates when required. Queries should follow the primary-key design.
