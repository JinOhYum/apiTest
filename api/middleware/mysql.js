db = require("mysql");
config = require("../config");

var mPool = null;

function init() {
  if (mPool == null) {
    mPool = db.createPool({
      connectionLimit: 5,
      host: config.sql.host,
      user: config.sql.user,
      password: config.sql.password,
      database: config.sql.database,
      waitForConnections: true,
    });
  }
  return mPool;
}

exports.query = async function (sql) {
  console.log(sql);
  return new Promise(function (resolve, reject) {
    var pool = init();
    pool.getConnection(function (err, connection) {
      if (err) {
        resolve([err.message, null]); // getConnection에서 에러 발생 시 처리
      } else {
        connection.query(sql, function (error, rows) {
          if (error) {
            resolve([error.sqlMessage, null]);
          } else {
            resolve([null, rows]);
          }
        });

        // connection이 존재할 때만 release 호출
        if (connection) {
          connection.release();
        }
      }
    });
  });
};

