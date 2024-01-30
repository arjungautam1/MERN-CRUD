import User from "../model/userModel.js";

// For Posting new user into Database
export const create = async (req, res) => {
  try {
    // Basic validation: Check if required fields are present
    // NOT For Tutorial

    // const requiredFields = ["name", "email", "address"];
    // for (const field of requiredFields) {
    //   if (!req.body[field]) {
    //     return res.status(400).json({ message: `${field} is required.` });
    //   }
    // }

    // Create user instance and save to the database
    const newUser = new User(req.body);
    // const email = newUser.email;  this is equivalent to above code.
    const { email } = newUser; //destrcturing code
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User already Exist." });
    }
    const savedData = await newUser.save();
    // Return the saved user data in the response
    // res.status(200).json(savedData);
    // This Added only for displaying in toast
    res.status(200).json({ message: "User Created Successfully." });
  } catch (error) {
    // Improved error handling
    res.status(500).json({ errorMessage: error.message });
  }
};

// For getting all users
export const getAllUsers = async (req, res) => {
  try {
    // Retrieve all users from the database
    const userData = await User.find();

    // Check if there are any users
    if (!userData || userData.length === 0) {
      // If no users are found, return a 404 response
      return res.status(404).json({ message: "User data not found." });
    }

    // If users are found, return the user data in the response
    res.status(200).json(userData);
  } catch (error) {
    // Handle any errors that occur during the database operation
    res.status(500).json({ errorMessage: error.message });
  }
};

// For getting user by id
export const getUserById = async (req, res) => {
  try {
    const id = req.params.id;

    // Find the user by ID
    const userExist = await User.findById(id);

    // If the user is not found, return a 404 response
    if (!userExist) {
      return res.status(404).json({ message: "User not found." });
    }

    // If the user is found, return the user data in the response
    res.status(200).json(userExist);
  } catch (error) {
    // Handle any errors that occur during the database operation
    res.status(500).json({ errorMessage: error.message });
  }
};

// For updating user from database
// For updating user from the database
export const update = async (req, res) => {
  try {
    const id = req.params.id;
    // Check if the user with the specified ID exists
    const userExist = await User.findById(id);
    if (!userExist) {
      return res.status(404).json({ message: "User Not Found." });
    }
    // Update the user and get the updated document
    const updatedData = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    // Send the updated data as a response
    // res.status(200).json(updatedData);
    res.status(200).json({ message: "User Updated Successfully." });
  } catch (error) {
    // Handle any errors that occur during the update process
    res.status(500).json({ errorMessage: error.message });
  }
};

// For deleting user from database
export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);
    if (!userExist) {
      return res.status(404).json({ message: "User Not Found." });
    }
    await User.findByIdAndDelete(id);
    res.status(201).json({ message: "User deleted successfully." });
  } catch (error) {
    // Handle any errors that occur during the delete process
    res.status(500).json({ errorMessage: error.message });
  }
};

// For deleting all users from database
export const deleteAllUsers = async (req, res) => {
  try {
    await User.deleteMany();
    res.status(201).json({ message: "All users are deleted." });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};
