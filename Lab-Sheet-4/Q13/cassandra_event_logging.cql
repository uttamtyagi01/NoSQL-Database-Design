-- Q13: Cassandra event logging by user and time period
USE CollegeDB;
CREATE TABLE EventLogs (
  user_id text,
  event_time timestamp,
  event_id text,
  event_type text,
  status text,
  PRIMARY KEY ((user_id), event_time, event_id)
) WITH CLUSTERING ORDER BY (event_time DESC);

INSERT INTO EventLogs (user_id,event_time,event_id,event_type,status) VALUES ('U101','2026-10-04 09:00:00','EV001','login','success');
INSERT INTO EventLogs (user_id,event_time,event_id,event_type,status) VALUES ('U101','2026-10-04 09:05:00','EV002','failed-login','failed');
INSERT INTO EventLogs (user_id,event_time,event_id,event_type,status) VALUES ('U102','2026-10-04 10:00:00','EV003','file-upload','success');
SELECT * FROM EventLogs WHERE user_id='U101' AND event_time >= '2026-10-04 09:00:00' AND event_time <= '2026-10-04 09:59:59';
