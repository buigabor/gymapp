exports.up = async (sql) => {
  await sql`
	CREATE TABLE exercises
	( id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	exercise_name VARCHAR(50),
	reps INT,
	weight INT,
	workout_id INT REFERENCES workout_days(id)
	);
	`;
};

exports.down = async (sql) => {
  await sql`
	DROP TABLE exercises`;
};