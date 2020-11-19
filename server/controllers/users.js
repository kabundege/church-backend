import 'dotenv/config';
import jwt from 'jsonwebtoken';
import db from '../helpers/db';
import Util from '../helpers/reponsehandler';

const utils = new Util();

class Users {
    static async Signup(req,res){
        const { phonenumber, role } = req.body;
        let exist;
        for(const user of db.users){
            if(user.phonenumber === phonenumber){
                exist = user;
            }
        }
        if(exist){
            utils.setError(409,'User Already Exist')
            return utils.send(res)
        }
        db.users.push(req.body)
        const token = await jwt.sign({phonenumber,role},process.env.JWT_SECRET)

        utils.setSuccess(201,'Signup Success',{token,...req.body})
        return utils.send(res);
    }
    static async Signin(req,res){
        let exist;
        for(const user of db.users){
            if(user.phonenumber === req.body.phonenumber){
                exist = user;
            }
        }
        if(!exist){
            utils.setError(404,'User Not Found')
            return utils.send(res)
        }
        const { phonenumber,role } = exist;
        const token = await jwt.sign({phonenumber,role},process.env.JWT_SECRET);
        
        utils.setSuccess(200,'SignIn Success',{token,...exist})
        return utils.send(res)
    }
}

export default Users
