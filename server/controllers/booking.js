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

        const names = amazina || req.userData.amazina;

        if(db.sundays[date]){
            for(const el of db.sundays[date]){
                if(el.phonenumber === phonenumber && el.amazina === names){
                    booked = true;
                }
            }
            data = [{...req.body,amazina:names,phonenumber},...db.sundays[date]]
        }else{
            data = [{...req.body,amazina:names,phonenumber}]
        }

        if(booked){
            utils.setError(403,'Ntabwo Wakwiyandika Kabiri')
            return utils.send(res)
        }

        db.sundays[date] = data;
        utils.setSuccess(201,'Booking Success',{...data,date})
        return utils.send(res)
    }

    static async GetAllBooks(req,res){
        utils.setSuccess(200, 'Fetch Success', db.sundays)
        return utils.send(res)
    }
}
