/**
 * Node.js 에서 사용할 express 라이브러리 import
 */
const express = require("express");
const router = express.Router();

validation_handler = require("./middleware/validation-handler");

/**
 * /controller/androidtController 를 사용 선언
 */
const androidController = require("./controller/androidtController");

/**
 * Node.js 에서 가장 많이 사용하는 rotuer 방식
 */

/**
 * router.post : POST 방식으로 사용
 * 
 * /test/getAndroid : API 를 호출할 URL 주소 예시) http://172.30.1.16:10001/test/getAndroid
 * 
 * validation_handler : API 통신 성공 여부
 * 
 * androidController.getAndroidTestAPI : 사용하고자 하는 API 함수 호출
 */
router.post(
  "/test/getAndroid",
  [],
  validation_handler,
  androidController.getAndroidTestAPI
);



  module.exports = router;