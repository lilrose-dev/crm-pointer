CREATE DATABASE crm;

-- COURSES TABLE
CREATE TABLE courses (
  course_id serial not null PRIMARY KEY,
  course_name varchar(64),
  course_ref_id int references courses(course_id)
);

-- WORKERS TABLE
CREATE TABLE workers (
  worker_id serial not null PRIMARY KEY,
  worker_name varchar(64) not null,
  worker_username VARCHAR(64) UNIQUE NOT NULL,
  worker_surname text not null,
  worker_middlename text not null,
  worker_phone_number varchar (13) not null,
  worker_nationality varchar(25) not null,
  worker_passport_letter varchar(2) not null,
  worker_passport_number varchar(7) not null,
  worker_email VARCHAR(255) not null,
  worker_region varchar(64) not null,
  worker_address text not null,
  worker_date_registration TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  worker_photo text not null, -----------
  worker_gender varchar(34) not null,
  worker_direction_of_study int REFERENCES courses(course_id),
  worker_teaching_language varchar(64) not null,
  worker_work_experience int,
  worker_graduation text, 
  worker_agreement_duration varchar(64) not null,
  worker_time_attendance varchar(64) not null,
  worker_language JSON[] not null,
  worker_agreement boolean not null default true,
  worker_password varchar(64) not null,   ------worker_passport_number
  worker_is_teacher boolean not null default false
);

--- GROUPS TABLE
CREATE TABLE groups (
  group_id serial not null PRIMARY KEY,
  group_name varchar(64) UNIQUE not null, 
  group_duration text not null,
  group_day_duration varchar(32),
  group_hour_duration int not null,
  group_price int not null,
  course_id int REFERENCES courses(course_id),
  group_types VARCHAR(64) not null,
  worker_id int REFERENCES workers(worker_id)sh
);

-- SALARY TABLE
CREATE TABLE salary (
  salary_id serial PRIMARY KEY,
  agreement_number varchar(64),
  salary_sum int not null,
  group_id int REFERENCES groups(group_id),
  worker_id int REFERENCES workers(worker_id)
);

-- STUDENTS TABLE 
CREATE TABLE students (
  student_id serial PRIMARY KEY,
  student_name varchar(64)  not null,
  student_surname varchar(64)  not null,
  student_middlename varchar(128) not null,
  student_data_of_birth varchar(64) not null,
  student_phone_number varchar (13)  not null,
  student_nationality varchar(25)  not null,
  student_passport_letter varchar(2)  not null,
  student_passport_number varchar(7)  not null,
  student_email text not null,
  student_region varchar(64) not null,
  student_address text not null,
  student_date_registration TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP, ---------------
  student_parents_phonenumber varchar(13) not null,
  student_gender varchar(64) not null,
  student_photo text not null, ---------
  student_direction_of_study int REFERENCES courses(course_id),
  student_studying_language varchar(64) not null,
  student_teacher int REFERENCES workers(worker_id) not null,
  student_graduation text not null,
  student_time_of_study varchar(64) not null,
  student_group int references groups(group_id) not null,
  student_result_entering_exam int,
  student_language JSON[] not null,
  student_agreement boolean not null default true
);

-- PAYMENTS TABLE
CREATE TABLE payments (
  payment_id serial PRIMARY KEY,
  payment_agreement_number varchar(64),
  payment_sum int not null,
  group_id int REFERENCES groups(group_id),
  student_id int REFERENCES students(student_id)
);

