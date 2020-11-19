import dotenv from 'dotenv';
import Util from '../helpers/reponsehandler';
import { SignIn, SignUp, Book } from '../helpers/schemas';

const util = new Util();

dotenv.config();

const handler = (req,res,schema) => {
  const { error } = schema.validate(req.body);
   
  if ( error ) {
    if (
      error.details[0].message
        .replace('/', '')
        .replace(/"/g, '')
        .includes('fails to match the required')
    ) {
      const Error = {
        error: 'Incorrect use of special characters',
        tip: `Please avoid characters that looks like = or /`,
      };
      util.setError(400, Error);
      return util.send(res);
    }

    const Error = error.details[0].message.replace('/', '').replace(/"/g, '');
    util.setError(400, Error);
    return util.send(res);
  }else{
    return 1;
  }
       
}

export default class validators {
    static async SignUpValidation(req, res, next) { 
      const result  = handler(req,res,SignUp)
        
      result === 1 ? next() : null
    }

    static async SignInValidation(req, res, next) { 
      const result  = handler(req,res,SignIn)
        
      result === 1 ? next() : null
    }

    static async BookingValidation(req, res, next) { 
      const result  = handler(req,res,Book)
        
      result === 1 ? next() : null
    }
}