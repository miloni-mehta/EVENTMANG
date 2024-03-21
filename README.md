Event Management System

The Event Management System is a web application designed to manage events, users, organizers, and registrations of event by user. The system is built using React for the frontend, Spring Boot for the backend, and MySQL for the database.

Table of Contents
•	Introduction
•	Features
•	Installation
•	Prerequisites
•	Backend Setup
•	Frontend Setup
•	Technologies Used
•	Contributing
•	License

Introduction
The Event Management System is a comprehensive platform to streamline event planning and organization processes. It serves as a centralized hub for managing events of all types, like conferences or any concert or any session. With intuitive features designed for administrators, organizers, and users, the system aims to simplify event coordination, registration.
Utilizing modern web technologies such as React for the frontend, Spring Boot for the backend, and MySQL for the database, the Event Management System offers a robust and scalable solution. Whether you're an event organizer looking to streamline your processes or an user seeking exciting events to join, this system provides a centralized platform to meet your needs efficiently and effectively.

Features
•	Event Management : Create, update and deletion off events by organizer.
•	Organizer Management: Addition, removal, and editing of organizer for event. 
•	User Management: CRUD operations for managing users.
•	Registration: Users can register for events.



Installation
 Prerequisites
•	Node.js
•	JDK
•	MySQL Server
•	IDE (IntelliJ IDEA, Eclipse, etc.)
Frontend Setup
1.	Clone the Repository:
git clone  “https://github.com/miloni-mehta/EVENTMANG.git”

2.	Navigate to frontend directory:
cd ../eventmang
git clone <frontend-repo-url>

3.	Install dependencies:
    npm install
4.	Run the frontend:
    npm start
       5. Access the frontend in your browser at http://localhost:3000

Backend Setup

1. Clone the backend repository:
    git clone “https://github.com/miloni-mehta/Event.git”
2.Navigate to the backend directory:
     Cd event/
3. Set up your database connection in src/main/resources/application.properties
4. Run the backend:
    ./mvnw spring-boot:run
5.	Access the API endpoints at http://localhost:8080/api/<endpoint>

Technologies Used

•	Frontend: React, React Router, Axios, Bootstrap, CSS
•	Backend: SpringBoot, SpringDataJPA, SpringWeb
•	Database: MySQL
•	Other Tools: Maven, npm

Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details


