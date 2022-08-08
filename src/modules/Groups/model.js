const PG = require('../../Lib/postgressOOP');

class Groups extends PG {
  GET_GROUPS() {
    return this.fetchAll('SELECT * FROM groups ORDER BY group_id DESC')
  }

  NEW_GROUP(name, duration, dayDuration, hourDuration, price, courseId, groupType, workerId) {
    return this.fetch("INSERT INTO groups(group_name, group_duration, group_day_duration, group_hour_duration, group_price, course_id, group_types, worker_id) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *", name, duration, dayDuration, hourDuration, price, courseId, groupType, workerId)
  }

  UPDATE_GROUP() {

  }

  DELETE_GROUP() {

  }
}

module.exports = new Groups();