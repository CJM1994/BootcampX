SELECT cohorts.name, AVG(completed_at - started_at) AS average_assistance_request_duration
FROM assistance_requests 
JOIN students ON assistance_requests.student_id = students.id
JOIN cohorts ON cohorts.id = students.cohort_id
GROUP BY cohorts.id
ORDER BY average_assistance_request_duration