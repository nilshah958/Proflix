/**
 * New node file for implementing the connection pooling
 */

function Pool()
{
	var num_conns =20;
	var mysql =  require('mysql');
	console.log(" Making the pool !! ------------------------------------------>>");
    this.pool = [];
    for(var i=0; i < num_conns; ++i){
   
    var connection =  mysql.createConnection({
    	host : 'localhost',
		user : 'root123',
		password : 'root123',
		port : '3306',
		database : 'videolibrary'
      });
    this.pool.push(connection); 
    this.last = 0;
    }
    
    console.log("**************************in process*****************");
    
    var cli = this.pool[this.last];
    this.last++;
    if (this.last == this.pool.length) // cyclic increment
       this.last = 0;
    return cli;

    
    close()
    {
    	console.log( "Returning the connection back to the user  ------------------->>");
    }
    
    
}
exports.Pool=Pool;


