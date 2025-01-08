12-factor application
This project is developed using the 12-Factor App methodology to adhere to modern software development best practices. It features a Next.js React frontend and a Spring Boot backend, both containerized with Docker and orchestrated using Docker Compose.

Codebase
The project utilizes a single codebase maintained in a version control system (GitHub Codespaces). Both the frontend and backend components are housed within the same repository, ensuring streamlined version control, enhanced traceability, and simplified management.
Dependencies
Frontend: package.json for react.js
Backend: pom.xml for spring boot

Config
All configurations are externalized using environment variables in the docker-compose.yml file. No hardcoded ports, URLs, or database connection properties are present.

Backing Services
The project handles the MySql database as an attached resource, operating within the backend container. Its configuration is defined in the docker-compose.yml file, enabling seamless integration and efficient management within the application’s infrastructure.

Build, Release, Run
Dockerfiles: Separate Dockerfiles are created for both the frontend and backend services.
Docker Compose:  A combined docker-compose.yml file manages the build and run stages by creating container images and deploying them as separate, isolated services, ensuring efficient management and seamless integration on the application components.

 
Processes
The Spring Boot backend is designed to be stateless. A MySQL database is used for data Storage, emphasizing the separation of persistent data from the stateless nature of the application logic. This design ensures scalability and a clear distinction between application state and data persistence.

Port Binding
Frontend: Port 3000
Backend: Port 8085

Concurrency
The Application supports horizontal scaling through the process model enabled by docker-compose. Multiple instances of the front-end and back-end services can be deployed concurrently to handle increased demand when needed.

Disposability
The project emphasizes rapid startup and smooth shutdown:
Spring Boot: Designed for efficient resource usage and fast startup, ensuring consistent and reliable performance.
Docker Compose: Enables seamless application management by allowing containers to be stopped and restarted with minimal downtime using the docker-compose down and docker-compose up commands.

Dev/Prod Parity
Development and production environment are kept highly consistent:

Containerized Workflow: The same Docker Compose configuration is utilized for both development and production environments.
Externalized Configuration: Environment variables are used to manage configuration, ensuring consistency across all stages.

Logs
Logs are treated as event streams and are accessible through container logs (docker-compose logs)
Admin Processes
Administrative tasks, including database migrations, can be carried out as one-off processes using Sprin
g Boot Actuator or by executing manual commands within the running containers, enabling efficient management of such operations.

Project Overview
Frontend:
Framework: React.js
Features: Game listing, adding, and Deleting Movies
Data Management: Fetches Game data from the backend.

Backend:
Framework: JAVA Spring Boot
Features: Simplified development with auto-configuration and embedded servers.
Provides a RESTful API for managing products (GET, POST, DELETE).
Seamless integration with various databases and tools.
Database: Java SpringBoot (Pl/SQL)

Technologies Used

Frontend: react.js
Backend: JAVA Spring Boot
Database: Pl/SQL
Containerization: Docker, Docker Compose


