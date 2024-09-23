let config = {
    jwt: {
      secret_key: "api-secret-key",
      token_config: {
        issuer: "api",
        subject: "apiInfo"
      }
    },
    sql: {
      // host: "172.30.1.22",
      host: "127.0.0.1",
      user: "yjo",
      password: "dkdlehf45",
      database: "YJO"
    },
    fcm: {
      serverKey: "AAAA73xJExU:APA91bFZpN4gQ3kf-A6Dm1ajaTd5s2x6hI9iyPRrl6yM1rkzjfnHhHTfjDlJaQ7LvQMtYslRoGIHOw1pL58-usErHhIozoyqMZkvNVCWJjSWHARHwi_-phxILO3Ogxe40R-7rNA4wM27"
    }
  };
  
  module.exports = config;
  