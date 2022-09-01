module.exports = {
    HOST: "ec2-3-225-213-67.compute-1.amazonaws.com",
    USER: "bfjtshpqxyacty",
    PASSWORD: "f2a55ecddf9531cca5911c1a527acfe239babc65a8923968e82dc087619b46ee",
    DB: "authen",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };