# Games Management Application
## **About**
This project is designed as part of the Prüfungsvorleistung | Winter 2024/25 for the Middleware Technology course at Hochschule für Technik Stuttgart.

### Project Overview
**Frontend**
- Framework: React.js
- Features:
1. Game listing
2. Adding games
3. Deleting games
4. Data Management: Fetches game data from the backend

**Backend**
- Framework: Java Spring Boot
- Features:
1. Simplified development with auto-configuration and embedded servers
2. RESTful API for managing games (GET, POST, DELETE)
3. Seamless integration with MySQL database

**Technologies Used**
- Frontend: React.js
- Backend: Java Spring Boot
- Database: MySQL
- Containerization: Docker, Docker Compose

# Documentation: 12-Factor Principles
## 🔒 Codebase
    The project uses a single codebase stored in a version control system (GitHub Codespaces). Both the frontend and backend components are maintained in the same 
    repository, enabling streamlined version control, better traceability, and simplified management.
## ⚙️ Dependencies
Frontend: package.json for React.js dependencies
Backend: pom.xml for Spring Boot dependencies
## 🔑 Config
All configurations are externalized via environment variables in the docker-compose.yml file. This eliminates hardcoding of values like ports, URLs, and database connection properties.
## 🏢 Backing Services
The MySQL database is treated as an attached resource, running within the backend container. Its configuration is defined in the docker-compose.yml file, ensuring smooth integration and efficient management.
## 🌄 Build, Release, Run
Dockerfiles: Separate Dockerfiles are created for both the frontend and backend services.
Docker Compose: The combined docker-compose.yml file manages both build and run stages by creating container images and deploying them as isolated services.
## 🌐 Processes
The backend is stateless, with a MySQL database handling persistent data. This design ensures clear separation between application logic and data persistence, enabling scalability.
## 🔌 Port Binding
- Frontend: Port 3000
- Backend: Port 8085
## 🚀 Concurrency
The application supports horizontal scaling through Docker Compose. Multiple instances of the frontend and backend services can run concurrently to handle increased demand.
## ⏳ Disposability
The application supports rapid startup and graceful shutdown:
Spring Boot: Optimized for fast startup and efficient resource utilization.
Docker Compose: Enables seamless management with commands like docker-compose down and docker-compose up.
## ⚖️ Dev/Prod Parity
Development and production environments are highly consistent:
Containerized Workflow: The same Docker Compose configuration is used in both stages.
Externalized Configurations: Managed via environment variables.
## 🔊 Logs
Logs are treated as event streams and can be accessed using docker-compose logs.
## ⚙️ Admin Processes
Administrative tasks, such as database migrations, can be performed using Spring Boot Actuator or by executing manual commands within the containers.

## **Summary**
The Games Management Application is a robust solution for managing games, offering features to list, add, and delete game records. The frontend, built with React.js, provides an intuitive interface, while the backend, powered by Java Spring Boot, ensures reliable and scalable API services. By leveraging Docker and Docker Compose, the application ensures environment consistency and simplifies deployment. Following the 12-Factor App methodology, this project embodies modern software development practices, making it scalable, maintainable, and efficient for educational use.

##  Steps to set up the project 

Docker should be installed on your machine.

Clone or download the docker-compose.yml file present in the repository.

You could see 3 services "db","app" and "frontend" you will have to make some configurations to run it please refer below steps.

In "db" inside environment add password for mysql and name of the database MYSQL_ROOT_PASSWORD: root MYSQL_DATABASE: gamedb

In "app" inside environment you will need to add the URL, Username, Password and Server port to start the backend service. - SPRING_DATASOURCE_URL=jdbc:mysql://db:3306/gamedb 
- SPRING_DATASOURCE_USERNAME=root 
- SPRING_DATASOURCE_PASSWORD=root 
- SERVER_PORT=8087

After this inside "ports" you need to map the ports for the application "8087:8087"

Note - Please note that what ever SERVER_PORT you have chosen that should match with the "ports". Application will not run if there are misconfiguration.

In "frontend" inside build->args section you will need to pass the endpoint where your backend is running in this case it on "http://localhost:8087" REACT_APP_HOST_IP_ADDRESS=http://localhost:8087

Note - Make sure the port in endpoint is same as mentioned in step 5.

Cross verify if you done everything correctly

Open cmd in the directory where the docker-compose.yml file is present and make sure your docker deamon is running and enter the command mentioned below. docker compose up --build -d

Once docker pulls all the images you can access your application on "http://localhost:3000"

NOTE - To check swagger just add swagger-ui.html at the end of backend host, for example http://localhost:8087/swagger-ui.html


