const model = require('./model');
const { signUser } = require("../../Lib/jwt");

module.exports = {
  Mutation: {
    login: async(_, {username, password}, { token }) => {
      const allworkers = await model.getWorkers();
      const findWorker = allworkers.find(item => item.worker_username === username && item.worker_password === password);
      
      
      if(!findWorker) {
        return ({
          status: 401,
          message: "Unauthorized !"
        })
      } else {
        return {
          token: signUser({id: findWorker.worker_id, username: findWorker.worker_username})
        }
      }
    }
  }
};