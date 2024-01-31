# MERN Stack Project Readme

This repository contains a MERN (MongoDB, Express.js, React, Node.js) stack project for managing user information. The project includes API endpoints for creating, updating, retrieving, and deleting user data.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/mern-stack-project.git
   cd mern-stack-project
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up MongoDB:

   - Make sure you have MongoDB installed and running on your machine.
   - Update the MongoDB connection string in the `server/config/db.js` file.

4. Start the server:

   ```bash
   npm start
   ```

   The server will run on `http://localhost:8000`.

## API Endpoints

### 1. Create a new user

- **Endpoint:** `POST /api/user`
- **Request Body:**

  ```json
  {
      "name": "arjun",
      "email": "arjun123@gmail.com",
      "address": "Canada"
  }
  ```

- **Response:**

  ```json
  {
      "success": true,
      "message": "User created successfully",
      "user": {
          "_id": "unique_user_id",
          "name": "arjun",
          "email": "arjun123@gmail.com",
          "address": "Canada",
          "createdAt": "timestamp"
      }
  }
  ```

### 2. Update user information

- **Endpoint:** `PUT /api/update/:_id`
- **Request Body:**

  ```json
  {
      "name": "updatedName",
      "email": "updatedEmail@gmail.com",
      "address": "Updated Address"
  }
  ```

- **Response:**

  ```json
  {
      "success": true,
      "message": "User updated successfully",
      "user": {
          "_id": "unique_user_id",
          "name": "updatedName",
          "email": "updatedEmail@gmail.com",
          "address": "Updated Address",
          "updatedAt": "timestamp"
      }
  }
  ```

### 3. Retrieve user by ID

- **Endpoint:** `GET /api/user/:_id`
- **Response:**

  ```json
  {
      "success": true,
      "user": {
          "_id": "unique_user_id",
          "name": "arjun",
          "email": "arjun123@gmail.com",
          "address": "Canada",
          "createdAt": "timestamp",
          "updatedAt": "timestamp"
      }
  }
  ```

### 4. Delete user by ID

- **Endpoint:** `DELETE /api/delete/:_id`
- **Response:**

  ```json
  {
      "success": true,
      "message": "User deleted successfully"
  }
  ```

## React Application

The project includes a React front-end for interacting with the provided API. To run the React app, navigate to the `client` directory and follow these steps:

1. Install client dependencies:

   ```bash
   cd client
   npm install
   ```

2. Start the React app:

   ```bash
   npm start
   ```

   The React app will run on `http://localhost:3000`. You can now access and interact with the user management interface.

## Contributing

If you'd like to contribute to this project, please follow the standard GitHub fork and pull request workflow. Additionally, make sure to adhere to the project's coding conventions and commit message guidelines.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as per the terms of the license.
