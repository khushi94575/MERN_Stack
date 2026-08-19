const jwt = require("jsonwebtoken");
const Staff = require("../model/staffModel");

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const staff = await Staff.findById(decoded.id).select("-password");

    if (!staff) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    req.user = staff;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
};

module.exports = authMiddleware;