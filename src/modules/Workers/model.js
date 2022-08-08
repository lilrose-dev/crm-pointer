const PG = require('../../Lib/postgressOOP')

class Workers extends PG {
  GET_WORKERS() {
    return this.fetchAll('SELECT * FROM workers ORDER BY worker_id DESC');
  }
  
  NEW_WORKER(name, username, surname, middlename, phone_number, nationality, passport_letter, passport_number, email, region, address, date_registration, photo, gender, direction_of_study, teaching_language, work_exprience, graduation, agreement_duration, time_attendance, language, agreement, password, is_teacher) {
    return this.fetch('INSERT INTO workers(worker_name, worker_username, worker_surname, worker_middlename, worker_phone_number, worker_nationality, worker_passport_letter, worker_passport_number, worker_email, worker_region, worker_address, worker_date_registration, worker_photo, worker_gender, worker_direction_of_study, worker_teaching_language, worker_work_experience, worker_graduation, worker_agreement_duration, worker_time_attendance, worker_language, worker_agreement, worker_password, worker_is_teacher) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24) RETURNING *', name, username, surname, middlename, phone_number, nationality, passport_letter, passport_number, email, region, address, date_registration, photo, gender, direction_of_study, teaching_language, work_exprience, graduation, agreement_duration, time_attendance, language, agreement, password, is_teacher)
  }

 async UPDATE_WORKER(id, name, username, surname, middlename, phone_number, nationality, passport_letter, passport_number, email, region, address, date_registration, photo, gender, direction_of_study, teaching_language, work_exprience, graduation, agreement_duration, time_attendance, language, agreement, password, is_teacher) {
    const [{worker_name, worker_username, worker_surname, worker_middlename, worker_phone_number, worker_nationality,  worker_passport_letter, worker_passport_number, worker_email, worker_region, worker_address,worker_date_registration, worker_photo, worker_gender, worker_direction_of_study, worker_teaching_language,
      worker_work_experience, worker_graduation, worker_agreement_duration, worker_time_attendance, worker_language,
      worker_agreement, worker_password, worker_is_teacher}] = await this.fetchAll('SELECT * FROM workers WHERE worker_id = $1', id);

    return this.fetch(`UPDATE workers SET worker_name = $1, worker_surname = $2, worker_middlename = $3, worker_phone_number = $4, worker_nationality = $5, worker_passport_letter = $6, worker_passport_number = $7, worker_email = $8, worker_region = $9, worker_address = $10, worker_date_registration = $11, worker_photo = $12, worker_gender = $13, worker_direction_of_study = $14, worker_teaching_language = $15, worker_work_experience = $16, worker_graduation = $17, worker_agreement_duration = $18, worker_time_attendance = $19, worker_language = $20,worker_agreement = $21, worker_password = $22, worker_is_teacher = $23, worker_username = $24 WHERE worker_id = $25`, 
      name ? name : worker_name,
      surname ? surname : worker_surname,
      middlename ? middlename : worker_middlename,
      phone_number ? phone_number : worker_phone_number,
      nationality ? nationality : worker_nationality,
      passport_letter ? passport_letter : worker_passport_letter,
      passport_number ? passport_number : worker_passport_number,
      email ? email : worker_email,
      region ? region : worker_region,
      address ? address : worker_address,
      date_registration ? date_registration : worker_date_registration,
      photo ? photo : worker_photo,
      gender ? gender : worker_gender,
      direction_of_study ? direction_of_study : worker_direction_of_study,
      teaching_language ? teaching_language : worker_teaching_language,
      work_exprience ? work_exprience : worker_work_experience,
      graduation ? graduation : worker_graduation,
      agreement_duration ? agreement_duration : worker_agreement_duration,
      time_attendance ? time_attendance : worker_time_attendance,
      language ? language : worker_language,
      agreement ? agreement : worker_agreement,
      password ? password : worker_password,
      is_teacher ? is_teacher : worker_is_teacher,
      username ? username : worker_username,
      id 
    )
  }

  DELETE_WORKER(id) {
    return this.fetch('DELETE FROM workers WHERE worker_id = $1', id)
  }
} 

module.exports = new Workers();