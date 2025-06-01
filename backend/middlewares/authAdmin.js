import jwt from "jsonwebtoken";

//admin authentication middleware
const authAdmin = async (req, res, next) => {
  try {
    const { atoken } = req.headers;
    if (!atoken) {
      return res.json({
        success: false,
        message: "Not Authorized Login Again!",
      });
    }
    const tokenDecode = jwt.verify(atoken, process.env.JWT_SECRET);

    if (tokenDecode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      res.json({
        success: false,
        message: "Not Authorized Login Again!",
      });
    } else {
      next();
    }
  } catch (e) {
    console.log(e);
    res.json({ success: false, message: e.message });
  }
};

export default authAdmin;
