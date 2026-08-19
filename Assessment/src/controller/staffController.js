const jwt = require("jsonwebtoken");
const {
  registerStaff,
  loginStaff,
} = require("../service/staffService");

const register = async (req, res, next) => {
  try {
    const { name, email, password, department } = req.body;

    const staff = await registerStaff({
      name,
      email,
      password,
      department,
    });

    res.status(201).json({
      success: true,
      message: "Staff registered successfully",
      data: staff,
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const staff = await loginStaff(email, password);

    const token = jwt.sign(
      {
        id: staff._id,
        department: staff.department,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.cookie("token", token, {
      httpOnly: true,
    });

    res.status(200).json({
      success: true,
      message: "Login successful",
    });
  } catch (error) {
    next(error);
  }
};
const getMe = async (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      data: req.user,
    });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  register,
  login,
};