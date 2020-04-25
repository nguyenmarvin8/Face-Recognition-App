# [_Face Recognition App_](https://face-recognition-mn.herokuapp.com/)

This Face Recognition App allows users to submit a photo and when a face is detected, a box is created over the face. It also allows users to create an account that tracks their submission count. It is a fully functional full-stack **CRUD** based **React** web application deployed on Heroku. This project was created using React.js, Node.js, Express.js and PostgreSQL database to keep track of user's accounts and track their submissions. It also uses Clarifai's API to locate a face in the photo submitted.

![Face Recognition App](https://imgur.com/GE4kbjY.jpg)

**View Front-End Repository**: [**Face Recognition App Front-End**](https://github.com/nguyenmarvin8/Face-Recognition-App)

**View Back-End Repository**: [**Face Recognition App API Back-End**](https://github.com/nguyenmarvin8/Face-Recognition-App-API)

**View App**: [**Face Recognition App**](https://face-recognition-mn.herokuapp.com/)

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
