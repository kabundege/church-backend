
import 'dotenv/config';
import db from '../helpers/db';
import jwt from 'jsonwebtoken';
import Util from '../helpers/reponsehandler';

const util = new Util();

export const authorizationCheck = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    let user;

    for( const exist of db.users){
        if(exist.phonenumber === decoded.phonenumber){
            user = exist;
        }
    }

    req.userData = user;
    next();
    
  } catch (error) {
    const Error = 'No token provided or Token expired';
    util.setError(401, Error);
    return util.send(res);
  }
};