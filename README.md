# Summary

This is the front repository of the project 13 of the Openclassrooms' course *React JavaScript*.

- [Summary](#summary)
- [Setup](#setup)
- [Back setup](#back-setup)
- [Populate the database](#populate-the-database)

## Setup

### Clone the repositories

1. Clone the back repository: 
    ```shell
    git clone https://github.com/Redshark61/Project-13-Bank-API.git
    ```

2. Clone the current front repository
3. Install dependencies for both repositories:
    ```shell
    npm install
    ```

### Back setup

1. Create the mongo database using the [mongodb website](https://www.mongodb.com/atlas).
2. Once done, click on the *connect* button and choose *Drivers*.
![img.png](documentation/img.png)
3. Finally, copy the connection string and paste it in the .env file of the back repository.
4. Run the back server:
    ```shell
    npm run dev:server
    ```

### Populate the database

1. Open a new shell, while the server is running.
2. Run the following command:
    ```shell
    npm run populate-db
    ```
   
## States

### Login

User can log in with his email and password. In order to be logged in, email and password must be valid and present in the database.

User has the ability to *remember me* in order to stay connected. Beneath are the different possibilities of the login submission:

| remember me    | Is connected    | Action                                                       | Result                                                                                    |                                                                                  
|----------------|-----------------|--------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| true           | true            | Going from profile -> Home by clicking the logo              | User is kept logged in and redirected to the home page                                    |                                  
| true           | true            | Going from profile -> Home by typing the url                 | User is logged out since the token is not stored in the local storage                     |                   
| true           | false           | Going from Home -> Profile by clicking the profile button    | User is kept logged in and redirected to the profile page without having to log in        |      
| true           | false           | Going from Home -> Profile by typing the url                 | User is redirected to the login page since the token is not stored in the local storage   | 
| false          | true            | Going from profile -> Home by clicking the logo              | User is logged out                                                                        |                                                                      
| false          | true            | Going from profile -> Home by typing the url                 | User is logged out                                                                        |                                                                      
| false          | true            | Going from profile -> Home by clicking the logout button     | User is logged out                                                                        |                                                                      
| false          | false           | Going from Home -> Profile by clicking the sign-in button    | User is redirected to the login page                                                      |                                                    
