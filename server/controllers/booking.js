import 'dotenv/config';
import db from '../helpers/db';
import Util from '../helpers/reponsehandler';

const utils = new Util();

export default class Books {
    static async Book(req,res) {
        let data, booked = false;
        const timeStamp =  Date.now()
        const today = new Date(timeStamp).getDay();
        let date = new Date(timeStamp).getDate();
        let month = new Date(timeStamp).getMonth();
        let year = new Date(timeStamp).getFullYear();
        const { phonenumber,itorero_ryibanze } = req.userData;
        const { amazina } = req.body;

        if(7 > today){
            date += 7 - today; 
        }

        if(date > 31){
            date = date - 31;
            if(month === 11){
                month = 1;
                year += 1; 
            }else{
                month = month + 2; 
            }
        }else{
            month = month + 1; 
        }

        const names = amazina || req.userData.amazina;

        for(const user of db.sundays){
            if(
                user.phonenumber === phonenumber && 
                user.amazina === names && 
                user.date=== date &&
                user.month === month &&
                user.year === year
            ){ booked = true }
        }

        if(booked){
            utils.setError(403,'Ntabwo Wakwiyandika Kabiri')
            return utils.send(res)
        }

        db.sundays.push({...req.body,itorero_ryibanze,amazina:names,phonenumber,date,month,year,timeStamp});
        utils.setSuccess(201,'Booking Success',{...req.body,amazina:names,date: `${date}/${month}/${new Date().getFullYear()}`})
        return utils.send(res)
    }

    static async GetAllBooks(req,res){
        utils.setSuccess(200, 'Fetch Success', db.sundays)
        return utils.send(res)
    }
}
