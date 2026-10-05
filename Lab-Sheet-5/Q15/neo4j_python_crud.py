# Q15 Neo4j Python CRUD application
# Install: pip install neo4j
from neo4j import GraphDatabase

URI = "bolt://localhost:7687"
AUTH = ("neo4j", "password")
driver = GraphDatabase.driver(URI, auth=AUTH)

def create_person(tx, name):
    tx.run("CREATE (p:Person {name:$name})", name=name)

def read_people(tx):
    return [r["name"] for r in tx.run("MATCH (p:Person) RETURN p.name AS name ORDER BY name")]

def update_person(tx, old, new):
    tx.run("MATCH (p:Person {name:$old}) SET p.name=$new", old=old, new=new)

def delete_person(tx, name):
    tx.run("MATCH (p:Person {name:$name}) DETACH DELETE p", name=name)

with driver.session() as session:
    session.execute_write(create_person, "Aman")
    session.execute_write(create_person, "Riya")
    print(session.execute_read(read_people))
    session.execute_write(update_person, "Riya", "Riya Sharma")
    print(session.execute_read(read_people))
    session.execute_write(delete_person, "Aman")
    print(session.execute_read(read_people))

driver.close()

# Graph databases support relationship-based queries.
# Example use cases: social networks, recommendation systems, fraud detection,
# and knowledge graphs. Scaling and availability depend on the Neo4j deployment architecture.
