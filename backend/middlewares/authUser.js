import jwt from "jsonwebtoken";

//user authentication middleware
const authUser = async (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.json({
        success: false,
        message: "Not Authorized Login Again!",
      });
    }
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

    if (!req.body) req.body = {};
    req.body.userId = tokenDecode.id;

    next();
  } catch (e) {
    console.log(e);
    res.json({ success: false, message: e.message });
  }
};

export default authUser;
