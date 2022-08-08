const model = require("./model");
const pubsub = require("../../Lib/pubsub");
const COURSES = "COURSES";

module.exports = {
	Query: {
		getCourses: () => {
			return model.getCourse();
		},
	},

	Mutation: {
		newCourse: (_, { name, course_id }) => {
			const newCourse = model.newCourse(name, course_id);
			pubsub.publish(COURSES);
			return newCourse;
		},

		updateCourse: (_, {id, name, course_id}) => {
			model.updateCourse(id, name, course_id);
			pubsub.publish(COURSES);
			return "Course is updated!";
		},

		deleteCourse: (_, {id}) => {
			model.deleteCourse(id)
			pubsub.publish(COURSES);
			return "Course is deleted!"
		}
	},

	Subscription: {
		courses: {
			resolve: (global, args) => model.getCourse(), 
			subscribe: () => pubsub.asyncIterator([COURSES]),
		},
	},

	Courses: {
		id: (global) => global.course_id,
		name: (global) => global.course_name,
		course_id: (global) => global.course_ref_id,
	},
};
