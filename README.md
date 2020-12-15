# carServiceAppt

To use api:

Install nodemon
nodemon npm start -> to run server 

You'll also need MongoDB to use DB

To access server use: http://localhost:3000/appointments/ -> this will show all appointments in DB

API command:

They can either be used through the React UI or browser/route

Get specific appointment by ID use -> http://localhost:3000/appointments/id

Get appointments in range (use YYYY/MM/DD) -> /appointments/range/:rangeStart&:rangeEnd 

Create new appointment -> use UI or /appointments/:appointmentDate&:time&:name&:email

Update appointment -> /appointments/:id&:appointmentDate&:time&:name&:email

Delete Appointment -> /appointments/delete/:id
