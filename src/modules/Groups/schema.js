const {gql} = require('apollo-server-express');

module.exports = gql`
  type Groups {
    id: ID!
    name: String!
    duration: String!
    dayDuration: String!
    hourDuration: Int!
    price: Int!
    courseId: ID!
    groupType: String!
    workerId: ID! 
  }

  extend type Query {
    getGroups: [Groups!]!
  }

  extend type Mutation {
    newGroup(name: String! duration: String! dayDuration: String! hourDuration: Int! price: Int! courseId: ID! groupType: String! workerId: ID!): Groups
    updateGroup(id: ID! name: String duration: String dayDuration: String hourDuration: Int price: Int courseId: ID groupType: String workerId: ID): String
    deleteGroup(id: ID!): String
  }

  extend type Subscription {
    groups: [Groups!]!
  }
`;