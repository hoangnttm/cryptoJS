var pg = require('pg');

var config = {
  user: 'postgres',
  database: 'Node1912',
  password: '123456',
  host: 'localhost',
  port: 5434,
  max: 10,
  idleTimeoutMillis: 1000
};

var pool = new pg.Pool(config);

function query(sql,data, cb){
  pool.connect((err, client, done) => {
    if(err) return cb(err);
    done();
    client.query(sql,data,(err, result) => {
      if(err) return cb(err);
      //console.log(result.rows);
      cb(undefined,result);
    });
  });
}
function insertUser (username,password,phone,cb){
 var sql=`INSERT INTO public."User1"(
	username, password, phone)
	VALUES ($1,$2,$3);`;
  query(sql,[username,password,phone],cb);
}
// insertUser('fff','321','0987',(err,res)=>{
//   console.log(res);
// });

let checkUser=(username,password,cb)=>{
  var sql=`SELECT * FROM public."User1" WHERE username=$1 AND password=$2`;
   query(sql,[username,password],(err,rs)=>{
     if(err) return cb(err);
     if(rs.rowCount !=1) return cb(new Error("User khong ton tai"))
     cb(undefined);
   });
}
// checkUser('sss','sss',err=>{
//   if(err) console.log('Loi');
// else {
//   console.log('OK');
// }
//   })
module.exports={insertUser,checkUser};
