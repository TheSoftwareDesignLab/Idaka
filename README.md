# Idaka
Download and compile Idaka following the steps.

### 1. Configure the database with MongoDB Atlas
#### Create the database
To create a MongoDB use the following link to go to the home page https://account.mongodb.com/account/login where you can find the database section. Here you need to click on the create button. 

![Imagen1](https://github.com/TheSoftwareDesignLab/Idaka/assets/60227230/7487dc54-4904-43db-8ad3-5f16fc1ad2f0)
![image](https://github.com/TheSoftwareDesignLab/Idaka/assets/60227230/233f2d68-c391-454f-860a-f5df1d57764a)

For more details please refer to [MongoDB_Documentation](https://www.mongodb.com/basics/create-database)
#### Create the collections on the created database
Once you create the database, you need to create the collections that the app uses. For this you need to navigate to the Collections tab and click on the plus sign + icon for a database

Then you need to enter the Collection Name, in this case we need 4 collections: Practices, Queries, Stages, TasksWithPractices.
![image](https://github.com/TheSoftwareDesignLab/Idaka/assets/60227230/dede5ab5-6ee4-4cfa-939f-61335668728f)
![image](https://github.com/TheSoftwareDesignLab/Idaka/assets/60227230/fc2e5a1f-89c9-4f88-bf63-b7928b16a947)

For more details please refer to [MongoDB_Documentation](https://www.mongodb.com/docs/atlas/atlas-ui/collections/)
#### Upload data
The following data needs to be uploaded on their corresponding collections:
* [Practices](Practices.json)
* [Stages](Stages.json)
* [TasksWithPractices](TasksWithPractices.json)

In order to do this you should go to your collection and click on Insert Document. Select the JSON way to upoad data and copy and paste the corresponding data.
![image](https://github.com/TheSoftwareDesignLab/Idaka/assets/60227230/30ccc6b1-faf0-48d0-8320-a115afd9401d)
![image](https://github.com/TheSoftwareDesignLab/Idaka/assets/60227230/e368b16b-2d13-4e66-bf44-9efe37b04052)


### 2. Configure the environment variables 
On the back-end folder create a .env file with the variable REACT_APP_DB_CONNECTION_STRING. Note that you should add the connection string for your database.
For more details please refer to [MongoDB_Documentation](https://www.mongodb.com/basics/mongodb-connection-string#:~:text=In%20the%20MongoDB%20Atlas%20web,connection%20string%20for%20your%20cluster.)


### 3. Download and compile Idaka with the following commands.
```
git clone https://github.com/TheSoftwareDesignLab/Idaka.git
```
To run the back-end:
```
cd Back-end
npm i
npm start
```
Now by opening another terminal, to run front-end:
```
cd Front-end
npm i
npm run build
npm start
```
