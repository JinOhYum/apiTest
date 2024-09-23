const sql = require("../middleware/mysql");
const axios = require('axios');

const util = require('util');
const exec = util.promisify(require('child_process').exec);

const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

/**
 * 라우터 방식으로 getAndroidTestAPI 함수는 api/router.js 에서 사용
 */
exports.getAndroidTestAPI = async (req, res) => {
    var returnResult = {};

    /**
     * 클라이언트에서 파라미터로 받은값
     */
    var id = req.body.id;
    var pw = req.body.pw;

    console.log("받은값 id = "+id);
    console.log("받은값 pw = "+pw);

    /**
     * DB 쿼리문 실행
     */
    var query = `SELECT * FROM TestTable`;
    var [error, rows] = await sql.query(query);

    if(error) {
        console.log(error);
        returnResult.error = {
            code: 9999,
            message: error
        };
        return res.status(200).json(returnResult);
    }
    console.log("DB에서 추출해 클라이언트로 보낼값 "+JSON.stringify(rows));

    returnResult.success = true;
    if (rows.length > 0) {
        // 여러 개의 행이 반환되어도 첫 번째 행만 사용합니다.
        returnResult.data = rows[0];
    } else {
        returnResult.data = null; // 만약 결과가 없으면 null을 반환합니다.
    }
    return res.status(200).json(returnResult);


}

