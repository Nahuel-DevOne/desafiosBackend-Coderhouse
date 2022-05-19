const optionsMySQL = {
    client: "mysql",
    connection : {
        /** otra forma de escribirlo el host: */
        // host: "localhost",
        host: "127.0.0.1",
        port : 3306,
        user: "root",
        password: "",
        database: "desafio08",
    }
  };
  
  module.exports = { optionsMySQL };