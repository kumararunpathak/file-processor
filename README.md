Process the uploade file based on 5 undescore.

Required sofware: Node and npm

Steps:
Go to the folder fileupload:

Run below commands to install dependencies
npm install

Run below command to run the application

node app.js

To test:

Go to postman or any rest client.

Use below details to make request:
Url: http://localhost:8080/api/file
Method: Post
Body: binary and select a file
Header: Content-Type: text/plain

Use below sample file from source code folder:

testfile.tex

TODO:
File validation is not done yet

And hit the server:
Expected output: formated response of file
