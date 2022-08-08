const { gql } = require('apollo-server-express');

module.exports = gql`
  extend type Mutation {
    login(username: String! password: String!): JSON
  } 
`;