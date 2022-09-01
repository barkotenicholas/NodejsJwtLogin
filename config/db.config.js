module.exports = {
    HOST: "localhosy",
    USER: "root",
    PASSWORD: "root",
    DB: "authen",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };