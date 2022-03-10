const { Pool } = require('pg');
const configuration = {
  host: 'localhost',
  user: 'vagrant',
  password: '123',
  database: 'bootcampx'
}
const pool = new Pool(configuration);

const cohort = process.argv[2];
const maxResults = process.argv[3] || 5;
const values = [`%${cohort}%`, maxResults];

const query =
  `SELECT students.id AS student_id, students.name AS name, cohorts.name AS cohort
  FROM students JOIN cohorts ON students.cohort_id = cohorts.id
  WHERE cohorts.name LIKE $1
  LIMIT $2;`;

pool.query(query, values)
  .then(res => {
    console.log(res.rows);
    res.rows.forEach(user => {
      console.log(`${user.name} is in the ${user.cohort} cohort and has a student id of ${user.student_id}`)
    })
  })
  .catch(err => {
    console.error('query', err.stack)
  });