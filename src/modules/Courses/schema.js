const { gql } = require("apollo-server-express");

module.exports = gql`
	type Courses {
		id: ID!
		name: String
		course_id: ID
	}

	type Query {
		getCourses: [Courses!]!
	}

	type Mutation {
		newCourse(name: String!, course_id: ID): Courses
		updateCourse(id: ID!, name: String!, course_id: ID): String
		deleteCourse(id: ID!): String
	}

	type Subscription {
		courses: [Courses!]!
	}
`;
