const PG = require('../../Lib/postgressOOP');

class Login extends PG {
  getWorkers() {
    return this.fetchAll("SELECT worker_id, worker_username, worker_password FROM workers")
  }
}

module.exports = new Login();