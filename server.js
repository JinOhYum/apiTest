const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const http = require("http");
const socketIo = require("socket.io");
const { socketHandler, socketSencondHandler } = require("./api/controller/socketController");

const app = express();

const port = process.env.PORT || 10001;

const socketPort = process.env.PORT || 8080;

const secondSocketPort = process.env.PORT || 8081;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", require("./api/router"));

/**
 * API 서버 열기
 */
app.listen(port, () => {
  console.log("Example app listening on port 10001!");
});

/**
 * 1번째 소켓 서버 열기
 */
const server = http.createServer(app);
const io = socketIo(server);
socketHandler(io);
server.listen(socketPort, () => {
  console.log(`Server listening on port ${socketPort}`);
});

/**
 * 2번째 소켓 서버 열기
 */
const secondServer = http.createServer(app);
const secondIo = socketIo(secondServer);
socketSencondHandler(secondIo);
secondServer.listen(secondSocketPort, () => {
  console.log(`Second Socket Server listening on port ${secondSocketPort}`);
});