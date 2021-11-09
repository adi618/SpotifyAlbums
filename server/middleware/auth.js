import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      next("No auth token");
    }

    const token = authorization.split(" ")[1];

    const isCustomAuth = token?.length < 500; // > 500 is Google OAuth

    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, "test");

      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub;
    }

    next();
  } catch (error) {
    next(error);
    console.log(error);
  }
};

export default auth;
