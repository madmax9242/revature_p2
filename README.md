
revature_p2
========

Our revature_p2 project is an event tracking task. A user can save, view, and delete upcoming events. Events are customizable with name, description, a calendar to pick exact dates and times, and what type 
of event you are planning/attending. We implemented a basic password encryption algorithm found in gatherup-frontend/src/app/service/password-encryption.ts which can easily be replaced or improved. 

Authors
--------

Max DePriest
TK Tran
Dave Wroblewski

Technology Versions
--------
- Java 1.8
- Spring Boot
- Angular CLI 9.1.6
- Node 12.16.3

Dependencies Implemented
-------------------
- H2 Database
- Spring Data JPA
- JDBC API
- Spring Web
- MySQL Driver
- Oracle Driver
- Spring Boot DevTools
- Validation

Installation
------------

Install revature_p2 by running:
    - Gatherup-frontend-

        npm install in the gatherup-backend directory. ng serve. 
        Open a web browser tab to localhost:4200
    
    - gatherup-back-

        Maven update project. Run as.. Spring Boot App. Hibernate will create a temporary H2 database schema on server boot up. 
        If you want to use your own SQL database, edit the application.properties file in 
        gatherup-backend/src/main/resources   
        We included dependencies for Oracle and MySQL in the pom.xml file
        

If you are having issues, please let us know.
We have a mailing list located at: gatherup@fakeEmail.com