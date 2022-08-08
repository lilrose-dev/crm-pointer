const model = require('./model');
const pubsub = require('../../Lib/pubsub');
const GROUPS = "GROUPS";

module.exports = {
  Query: {
    getGroups: () => {
      return model.GET_GROUPS();
    }
  },

  Mutation: {
    newGroup: (_, {name, duration, dayDuration, hourDuration, price, courseId, groupType, workerId}) => {
      const new_group = model.NEW_GROUP(name, duration, dayDuration, hourDuration, price, courseId, groupType, workerId);
      pubsub.publish(GROUPS);
      return new_group;
    },
    updateGroup: (_, {id, name, duration, dayDuration, hourDuration, price, courseId, groupType, workerId}) => {
      
    }
  },

  Subscription: {
    groups: {
      resolve: (global, args) => model.GET_GROUPS(),
      subscribe: () => pubsub.asyncIterator([GROUPS])
    }
  },

  Groups: {
    id: (global) => global.group_id,
    name: (global) => global.group_name,
    duration: (global) => global.group_duration,
    dayDuration: (global) => global.group_day_duration,
    hourDuration: (global) => global.group_hour_duration,
    price: (global) => global.group_price,
    courseId: (global) => global.course_id,
    groupType: (global) => global.group_types,
    workerId: (global) => global.worker_id,
  }
}