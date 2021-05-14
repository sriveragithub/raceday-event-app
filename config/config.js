module.exports = 
{
  "development": {
    "username": "postgres",
    "password": "postgres",
    "database": "template_database_dev",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    username: 'cdnabqdwaibvbx',
    password: '2657cc38f9a4865efbf2def2c9effd3cd6d4b907d0e84e1eccfc8bdffb467e06',
    database: 'dfrtjqd60qv5j0',
    host: 'ec2-107-22-245-82.compute-1.amazonaws.com',
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false
      }
    }
  }
}
