const { gql } = require('apollo-server-express');

module.exports = gql`
  scalar Date
  scalar JSON
  
  type Workers {
    id: ID!
    name: String!
    username: String!
    surname: String!
    middlename: String!
    phone_number: String!
    nationality: String!
    passport_letter: String!
    passport_number: String!
    email: String!
    region: String!
    address: String!
    date_registration: Date
    photo: String!
    gender: String!
    direction_of_study: ID!
    teaching_language: String!
    work_exprience: Int
    graduation: String!
    agreement_duration: String!
    time_attendance: String!
    language: JSON
    agreement: Boolean!
    password: String!
    is_teacher: Boolean!
  }

  extend type Query {
    getWorkers: [Workers!]!
  }

  extend type Mutation {
    newWorker(name: String! username: String! surname: String! middlename: String! phone_number: String! nationality: String! passport_letter: String! passport_number: String! email: String! region: String! address: String! date_registration: Date photo: String! gender: String! direction_of_study: ID! teaching_language: String! work_exprience: Int graduation: String! agreement_duration: String! time_attendance: String! language: JSON agreement: Boolean! password: String! is_teacher: Boolean!): Workers
    updateWorker(id: ID! name: String username: String surname: String middlename: String phone_number: String nationality: String passport_letter: String passport_number: String email: String region: String address: String date_registration: Date photo: String gender: String direction_of_study: ID teaching_language: String work_exprience: Int graduation: String agreement_duration: String time_attendance: String language: JSON agreement: Boolean password: String is_teacher: Boolean): String
    deleteWorker(id: ID!): String
  }

  extend type Subscription {
    workers: [Workers!]!
  }
`;