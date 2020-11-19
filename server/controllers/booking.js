import 'dotenv/config';
import db from '../helpers/db';
import Util from '../helpers/reponsehandler';

const utils = new Util();

export default class Books {
    static async Book(req,res) {
        let data, booked = false;
        const today = new Date().getDay();
        let date = new Date().getDate();
        const { phonenumber } = req.userData;
        const { amazina } = req.body;

        if(7 > today){
            date += 7 - today; 
        }

        if(db.sundays[date]){
            for(const el of db.sundays[date]){
                if(el.phonenumber === phonenumber && el.amazina === amazina){
                    booked = true;
                }
            }
            data = [{...req.body,phonenumber},...db.sundays[date]]
        }else{
            data = [{...req.body,phonenumber}]
        }

        if(booked){
            utils.setError(403,'Not Allowed To Book Twice')
            return utils.send(res)
        }

        db.sundays[date] = data;
        utils.setSuccess(200,'Booking Success')
        return utils.send(res)
    }

    static async GetAllBooks(req,res){
        utils.setSuccess(200, 'Fetch Success', db.sundays)
        return utils.send(res)
    }
}
