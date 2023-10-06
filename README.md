# Breads
This is a project to demo fullstack JavaScript development (MERN)


To run this project:

0. ```npm install -g nodemon``` if you don't have this dev tool
1. Start your MongoDB server if it is not already running
2. ```npm``` install
3. create a .env based on .env.sample
   1. Update MONGO_URI with the uri to your MongoDB database by replacing <uri-to-mongo-db>
4. Run project
   1. ```nodemon``` inside root directory alongside server.js

## Endpoints

/bakers/
Index       GET      /bakers/
**Show        GET      /bakers?id=<baker_id> **
Show        GET      /bakers/:id
Create      
Update      
Delete      DELETE   /bakers/:id

/breads/
Index       GET      /breads/
Show        GET      /breads?baker=<baker_id>
Show        GET      /breads/:id
Create      POST     /breads/
Update      PUT      /breads/:id
Delete      DELETE   /breads/:id