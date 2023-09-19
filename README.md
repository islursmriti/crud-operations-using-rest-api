# crud-operations-using-rest-api
Built a REST API using MySQL as the database and Node.js as our language. We’ll also use the Express.js framework. This REST API will give the list of top search engines.
The curl_commands.rest file contains the put, delete and post commands. 

The database was made in phpadmin using db4free.net. It contains the list of top search engines with their name and released year. The details of database are in config.js file.

The database created has 6 rows which are as follows-

![image](https://github.com/islursmriti/crud-operations-using-rest-api/assets/104566739/76995b44-2fb2-41ac-88d1-9f04291fd334)

# The output of the commands are as follows:
## 1. post :/collection-(added a new row 7,naver,2018)

![image](https://github.com/islursmriti/crud-operations-using-rest-api/assets/104566739/c3f239a7-9987-4fed-ab0b-f70d53208667)
![image](https://github.com/islursmriti/crud-operations-using-rest-api/assets/104566739/b24b142e-4fe3-480e-8987-b6ad5d6171ed)

## 2. GET /:collection/:id -(below is the output of id=7)

![image](https://github.com/islursmriti/crud-operations-using-rest-api/assets/104566739/abd26117-4ded-4cfe-9f7d-6ab271937a11)

## 3.  PUT /:collection/:id - (updated the data of id=7.Changed the name from naver to naver whale)

![image](https://github.com/islursmriti/crud-operations-using-rest-api/assets/104566739/30a50754-6f23-426f-8093-2d1e89159182)
![image](https://github.com/islursmriti/crud-operations-using-rest-api/assets/104566739/756231fb-1c00-4658-aa52-4ecd4675cba8)

## 4. DELETE /:collection/:id - (deleted the row of id=7)
   
![image](https://github.com/islursmriti/crud-operations-using-rest-api/assets/104566739/06f964f8-a4f0-415a-b4d9-6d6016f67ce9)
![image](https://github.com/islursmriti/crud-operations-using-rest-api/assets/104566739/b95a2f89-01bc-4f4c-9478-42329f2c37af)




 
