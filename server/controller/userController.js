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
    res.status(200).json(savedData);
  } catch (error) {
    // Improved error handling
    res.status(500).json({ errorMessage: error.message });
  }
};

// For getting all users
export const getAll = async (req, res) => {
  try {
    const userData = await User.find();
    if (!userData) {
      return res.status(404).json({ message: "User Data not found." });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};
