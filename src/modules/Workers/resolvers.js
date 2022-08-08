const model = require('./model');
const pubsub = require('../../Lib/pubsub');
const WORKERS = "WORKERS";

module.exports = {
  Query: {
    getWorkers: () => {
      return model.GET_WORKERS()
    }
  },

  Mutation: {
    newWorker: (_, {name, username, surname, middlename, phone_number, nationality, passport_letter, passport_number, email, region, address, date_registration, photo, gender, direction_of_study, teaching_language, work_exprience, graduation, agreement_duration, time_attendance, language, agreement, password, is_teacher}) => {
      const new_worker = model.NEW_WORKER(name, username, surname, middlename, phone_number, nationality, passport_letter, passport_number, email, region, address, date_registration, photo, gender, direction_of_study, teaching_language, work_exprience, graduation, agreement_duration, time_attendance, language, agreement, password, is_teacher);
      pubsub.publish(WORKERS)
      return new_worker
    },
    updateWorker: (_, {id, name, username, surname, middlename, phone_number, nationality, passport_letter, passport_number, email, region, address, date_registration, photo, gender, direction_of_study, teaching_language, work_exprience, graduation, agreement_duration, time_attendance, language, agreement, password, is_teacher}) => {
      model.UPDATE_WORKER(id, name, username, surname, middlename, phone_number, nationality, passport_letter, passport_number, email, region, address, date_registration, photo, gender, direction_of_study, teaching_language, work_exprience, graduation, agreement_duration, time_attendance, language, agreement, password, is_teacher);
      pubsub.publish(WORKERS)
      return "Worker is updated!"
    },
    deleteWorker: (_, {id}) => {
      model.DELETE_WORKER(id);
      pubsub.publish(WORKERS)
      return "Worker is deleted!"
    }
  },

  Subscription: {
    workers: {
      resolve: (global, args) => model.GET_WORKERS(),
      subscribe: () => pubsub.asyncIterator([WORKERS])
    }
  },

  Workers: {
    id: (global) => global.worker_id,
    name: (global) => global.worker_name,
    username: (global) => global.worker_username,
    surname: (global) => global.worker_surname,
    middlename: (global) => global.worker_middlename,
    phone_number: (global) => global.worker_phone_number,
    nationality: (global) => global.worker_nationality,
    passport_letter: (global) => global.worker_passport_letter,
    passport_number: (global) => global.worker_passport_number,
    email: (global) => global.worker_email,
    region: (global) => global.worker_region,
    address: (global) => global.worker_address,
    date_registration: (global) => global.worker_date_registration,
    photo: (global) => global.worker_photo,
    gender: (global) => global.worker_gender,
    direction_of_study: (global) => global.worker_direction_of_study,
    teaching_language: (global) => global.worker_teaching_language,
    work_exprience: (global) => global.worker_work_experience,
    graduation: (global) => global.worker_graduation,
    agreement_duration: (global) => global.worker_agreement_duration,
    time_attendance: (global) => global.worker_time_attendance,
    language: (global) => global.worker_language,
    agreement: (global) => global.worker_agreement,
    password: (global) => global.worker_password,
    is_teacher: (global) => global.worker_is_teacher,
  }
};