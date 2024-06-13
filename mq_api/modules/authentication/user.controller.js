const Auth = require('./user.model');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const generateToken = _id => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: '3d' })
}

const signupUser = async (req, res) => {
  try {
    const { email, password, name, company, phone, role, country, terms } = req.body

    // Check if email already exists
    const exists = await Auth.findOne({ email })
    if (exists) {
      throw Error('Email is already in use')
    }

    // Hash password
    const salt = await bcrypt.genSalt()
    const hash = await bcrypt.hash(password, salt)

    // Create new user
    const user = await Auth.create({ email, password: hash, name, company, phone, role, country, terms })
    
    // Generate token
    const token = generateToken(user.id)

    // Send response
    res.status(200).json({ email, token })

  } catch (error) {
    // Error Handling
    res.status(400).json({ error: error.message })
  }
}


const loginAuth = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw Error('All fields must be filled');
    }

    const user = await Auth.findOne({ email });

    if (!user) {
      throw Error('Incorrect Email');
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      throw Error('Incorrect password'); 
    }

    const token = generateToken({
      _id: user._id,
      email: user.email,
      name: user.name,
      Role: user.role,
    });

    res.status(200).json({ 
      token: token,
      user: {
        _id: user._id,
        email: user.email,
        name: user.name,
        Role: user.role
      },
      message: 'Login Successful' 
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};
const getUsers = async (req, res) => {
  try {

    const filter = {}; 

        
    if (req.query.first_name) {
        filter.first_name = req.query.first_name;
    }

      const user = await Auth.find({...filter});

      res.status(200).json(user);
  } catch (error) {
      res.status(404).json({ message: error.message });
  }
}

const getUserById = async (req, res) => {
  try {
      const user = await Auth.findById(req.params._id);
      if (!user) {
          return res.status(404).json({ message: "user not found" });
      }
      res.status(200).json(user);
  } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
  }
};  

const deleteUserById = async (req, res) => {
  try {
    const user = await Auth.findById(req.params._id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    await Auth.deleteOne({ _id: req.params._id }); // Delete the user
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};



module.exports = {
  signupUser,
  loginAuth,
  getUsers,
  getUserById,
  deleteUserById,
};
