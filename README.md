# ThirdFort-Note-API

This is a simple API that saves personal notes in a MYSQL database.

To run the API execute following commands.

```shell
npm install
npm start
```

To run tests

```shell
npm test
```

Install express js framework and MySQL driver with NPM. Go to terminal and use the below commands :

 ```shell
 npm install express --save
 npm install mysql --save
 npm install body-parser --save
```

##### Database
Create database and table for perform crud operation of node js restful API.

```sql
CREATE TABLE Note (
    NoteId int NOT NULL AUTO_INCREMENT,
    NoteHeading varchar(255) NOT NULL,
    NoteContent varchar(255),
    IsArchived boolean,
    PRIMARY KEY (Personid)
)
```


###### Database Connection Details
Required database connection for fetching or update data into database is as follows.

When establishing a connection, you can set the following options:

`host`: The hostname of the database you are connecting to. (Default: localhost)
`user`: The MySQL user to authenticate as.
`password`: The password of that MySQL user.
`database`: Name of the database to use for this connection (Optional).

There is a db connection wrapper, this will allow you to create connection on db which stored on a single file and can be reuse by other modules.To create database connection in dbConnection.js include following code.

```javascript
var mysql=require('mysql')

var dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'thirdfort_noteapi'
});
dbConn.connect();

module.exports = dbConn;
```

 
## API
                            localhost:3000/notes/

### API Methods

- **/notes/addNew** - Accepts a POST request and Create a new Note in the database.
- **/notes/**- Aceept a GET request and Fetch all the Notes details from the database.
- **/notes/:id**- Aceept a GET request and Returns a single Note record.
- **/notes/update** - Aceept a PUT request and Update a Note. Only Note Heading and the Note Content.
- **/notes/delete/:id**-Aceept a DELETE request andDelete a Note.
- **/notes/archive**-Aceept a PUT request and a flag will up in Database. Set IsArchived= True.
- **/notes/unArchive**-Aceept a PUT request and Set ISArchived= False.
- **/notes/archived**- Aceept a GET request and Fetch all the archived Notes from Database.
- **/notes//unArchived**- Aceept a GET request and  Fetch all the UnArchived notesFrom the database.

### Why Node.js/Express?
                     `Node version used:    v15.2.0`
- There are a lot of ready and useful Npm modules to work with pure HTTP(s), REST API, Web Services, etc that can be used both to construct API and to implement interaction with existing applications.
- Can reuse and share the code between the frontend and the backend parts of the application if needed.
- JavaScript is the most popular programming language, so the codebase will be easier to understand.
- The capability of the Node to handle multiple requests with low response times makes it a good fit when we consider a multi-user environment.

### Alternatives Considered
                                   `ASP .NET`
- Asp.Net Web API supports various MVC features such as routing, controllers, action results, filter, model binders, IOC container or dependency injection that makes it more simple and robust and easy to develop.

### If I were to spend more time on this task:
- Implement JWT-Based, Stateless Authentication.
- Implement input validation.
- Сreate a security checklist to minimize the possibility of SQL injection.
- Allow filtering, sorting, and pagination.