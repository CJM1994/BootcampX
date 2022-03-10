const { Pool } = require('pg');
const pool = new Pool({
  host: 'localhost',
  user: 'vagrant',
  password: '123',
  database: 'bootcampx'
});

pool.query(`
SELECT DISTINCT teachers.name AS teachers, cohorts.name AS cohort
FROM teachers 
JOIN assistance_requests ON assistance_requests.teacher_id = teachers.id
JOIN students ON assistance_requests.student_id = students.id
JOIN cohorts ON students.cohort_id = cohorts.id
WHERE cohorts.name = 'JUL02'
ORDER BY teachers.name
`)
  .then(res => {
    console.log(res.rows);
  })
  .catch(err => {
    console.error('query:', err.stack);
  });