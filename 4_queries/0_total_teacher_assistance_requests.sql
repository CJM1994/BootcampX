SELECT COUNT(assistance_requests.*) AS total_assistances, name
FROM assistance_requests
JOIN teachers ON teacher_id = teachers.id
WHERE teachers.name = 'Waylon Boehm'
GROUP BY teachers.name