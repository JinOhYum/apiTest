/**
 * 첫번째 Socket.io 열기
 */
const socketHandler = (io) => {
    io.on('connection', (socket) => {
        /**
         * 유저가 소켓 서버에 연결완료되었을때
         */
        console.log("User connected");

        socket.on('connectReceive', (data) => {
            /**
             * connectReceive key 로 유저가 소켓서버로 데이터를 보냄
             */
            console.log(data);

            /**
             * dataFrom key 로 소켓서버에 연결되어있는 유저한테 데이터를 다시 보냄
             */
            io.emit("dataFrom", data);
        });

        socket.on('disconnect', () => {
            /**
             * 유저가 소켓 서버 연결 종료 되었을때
             */
            console.log('User disconnected');
        });
    });
};


/**
 * 두번째 Socket.io 열기
 */
const socketSencondHandler = (io) => {
    io.on('connection', (socket) => {
        console.log("User Second connected");

        socket.on('connectSecondReceive', (data) => {
            console.log(data);
            io.emit("secondDataFrom", data);
        });

        socket.on('disconnect', () => {
            console.log('User Second disconnected');
        });
    });
};

module.exports = {
    socketHandler,
    socketSencondHandler
};

