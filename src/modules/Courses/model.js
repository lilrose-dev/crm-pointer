const PG = require("../../Lib/postgressOOP");

class Courses extends PG {
	getCourse() {
		return this.fetchAll("SELECT * FROM courses ORDER BY course_id ASC");
	}

	newCourse(course_name, course_ref_id) {
		return this.fetch(
			"INSERT INTO courses(course_name, course_ref_id) VALUES($1, $2) RETURNING *",
			course_name,
			course_ref_id || null
		);
	}

	updateCourse(course_id, course_name, course_ref_id) {
		return this.fetch(
			"UPDATE courses SET course_name = $1, course_ref_id = $2 WHERE course_id = $3",
			course_name,
			course_ref_id,
			course_id
		);
	}

	deleteCourse(id) {
		return this.fetch(
			"DELETE FROM courses WHERE course_id = $1", id
		)
	}
}

module.exports = new Courses();
