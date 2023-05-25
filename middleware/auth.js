import jwt from "jsonwebtoken";
import Author from "../model/author";
const jwtsecret = process.env.JWT_SECRET;

export async function auth(req, res, next) {
  try {
    const authorization = req.cookies.token;
    if (!authorization) {
      return res.status(401).json({
        error: "Kindly sign-in as an author",
      });
    }
    let verified = jwt.verify(authorization, jwtsecret);
    if (!verified) {
      return res.status(401).json({
        error: "Token invalid, you can't access this route",
      });
    }

    const { id } = verified;

    //find author by id;
    const author = await Author.findOne({ id });

    if (!author) {
      return res.status(401).json({
        error: "Kindly register/sign-in as an author",
      });
    }
    req.author = verified;
    next();
  } catch (error) {
    res.status(401).json({
      error: "Author not logged in",
    });
  }
}
