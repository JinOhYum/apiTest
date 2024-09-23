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
      serverKey: "fcm토큰"
    }
  };
  
  module.exports = config;
  