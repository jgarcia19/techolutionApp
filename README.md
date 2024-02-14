This is a simple MERN Stack application that creates a web page that lists out tasks, and allows the user to create tasks, edit tasks, and delete tasks.

Running this requires node package manager, and a MongoDB database. 

To run:

1. Open command prompt in where the repository is stored locally
   
2. Go to the client folder and run the following to install dependencies: npm i

3. Repeat step 1 except for the server folder

4. Create a file named config.env with the following inside:

    ATLAS_URI={Insert MongoDB URI here}
    PORT=5000

   (See following for how to create a MongoDB Atlas database: https://www.mongodb.com/basics/create-database)

6. Run the following command on the server folder: npm start

7. Open another command prompt on the client folder and run the following command: npm start

After step 5 your web browser should open and you'll be able to see the list of tasks on your web browser.
