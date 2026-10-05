// Q14 Neo4j - transaction operations
// Run the following related statements inside one driver-managed transaction.
CREATE (p:Product {id:'P100',name:'Keyboard',stock:10});
MATCH (p:Product {id:'P100'}) SET p.stock = p.stock - 1 RETURN p;
MATCH (p:Product {id:'P100'}) RETURN p;
MATCH (p:Product {id:'P100'}) SET p.status = 'sold' RETURN p;
MATCH (p:Product {id:'P100'}) DELETE p;
# A transaction groups related operations; commit preserves them together, while rollback
# can undo uncommitted work. Transaction management supports consistent graph data.
