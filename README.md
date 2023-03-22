# scalaCode-test

To run the APIs you will have to first run the server on the backend by using the command node app.js in the terminal, which will start the server and establish the connection to the Database as well. Then you will have to go to the Postman application and enter the endpoints for the APIs and the inputs which I am mentioning below.

Providing the link to my Postman Collection as well - https://api.postman.com/collections/21003983-545ccc32-bb29-4b29-85f9-3d83db2760d0?access_key=PMAT-01GW220RNN4M0Q7Q9J5ZM897K8

1.	Creating a new user API:
Method: POST
API endpoint : http://localhost:1234/api/add-user

This api is used to create a new user and will take the inputs as below:
1.	name
2.	age
3.	sex
4.	school
5.	university
6.	maritalStatus
Make sure to enter the spellings of keys as mentioned and in key value pairs. Eg. {name:”Aman”}
After providing the inputs when you will hit the endpoint, a new user record will be created in the database.

2.	Retrieving a user record by ID:
Method: POST
API endpoint : http://localhost:1234/api/get-user

This api is used to retrieve a user record by providing the ID of the user you want to see details of.
You have to just provide the ID of the user and you will get the response with all the details of the specific user.




3.	Update an existing user record:
Method: PUT
API endpoint : http://localhost:1234/api/update-user/:id

This api is used to update a specific user by providing the id of the specific user.
This endpoint takes id as a parameter so you will just have to enter the ID of the user after the last / in the endpoint and then in the body you will have to enter the body with the keys and values which you want to update. E.g
Changing the name of the person Aman, you just have to put the id on the endpoint and in the body enter {name:”the name you want”}

4.	Deleting a user record:
Method: DELETE
API endpoint : http://localhost:1234/api/delete-user/:id

This api is used to delete a user from the database.
You just have to enter the id of the user which you want to delete from the database in the endpoint after the last /.
As soon as you will hit the endpoint , the user will be deleted from the endpoint.

5.	Getting all user records with Pagination, Sorting and Filtering.
Method: GET
API endpoint: http://localhost:1234/api/get-all-user/:page/:pageSize

This api is used to retrieve all the users from the database but with pagination, which means only some results will be visible on a single page.
This endpoint takes page and pageSize as the parameters, so in the url you will have to first enter the page number and then put a / and then enter the page size which means how many entries you want per page.
As you will hit the endpoint, you will get only limited number of entries which you want. I have added sorting also in this on the basis of Name in descending order and also a filter on the basis of the user’s age is greater than 25. 


