# [_Face-Recognition-App_](https://face-recognition-mn.herokuapp.com/)

This Face Recognition App is a **CRUD** based **REACT APP** built using create-react-app. This is a fully functional full-stack web application deployed on Heroku. The front end is created using React.js, Node.js with Express.js for the backend as well as a PostgreSQL database to keep track of user's accounts and track their submission counts. The application uses the Clarifai API to locate a face in the picture submitted. 

![Face-Recognition-App](https://imgur.com/GE4kbjY.jpg)

**View Repository**: [**Face-Recognition-App**](https://github.com/nguyenmarvin8/Face-Recognition-App)

**View Back-End Repository**: [**Face-Recognition-App-API**](https://github.com/nguyenmarvin8/Face-Recognition-App-API)

**View App**: [**Face-Recognition-mn.herokuapp.com/**](https://face-recognition-mn.herokuapp.com/)

## Functionality and Features

* A components based a with states and props.

* Users can **register** & **sign-in** into the app.

* It is connected to a database to store user details and passwords which are hashed and stored.

* The user can input an image url and utilizing the **Clarifai API** the response is used to calculate the _Face Highlight box_.

## Technologies Used

### Front-End
- HTML5
- CSS3
- React.js

### NPM Packages
- Create-React-App
- Tachyons
- React-tilt
- Particles.js
- Bcrypt
- Postgresql
- Knex
- Body parser
- Cors
- Express

### Back-end
- Node.js
- Express.js
- PostgreSQL

### APIs
- [Clarifai](https://www.clarifai.com/)
