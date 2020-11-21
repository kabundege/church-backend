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
        const { phonenumber,itorero_ryibanze } = req.userData;
        const { amazina } = req.body;

        if(7 > today){
            date += 7 - today; 
        }

        if(date > 31){
            date = date - 31;
            month = month + 2; 
        }else{
            month = month + 1; 
        }

        const names = amazina || req.userData.amazina;

        for(const user of db.sundays){
            if(
                user.phonenumber === phonenumber && 
                user.amazina === names && 
                new Date(user.timeStamp).getDate() === date &&
                new Date(user.timeStamp).getMonth() === month
            ){ booked = true }
            console.log(new Date(user.timeStamp).getDate() === date,
            new Date(user.timeStamp).getMonth() === month)
        }

        if(booked){
            utils.setError(403,'Ntabwo Wakwiyandika Kabiri')
            return utils.send(res)
        }

        db.sundays.push({...req.body,itorero_ryibanze,amazina:names,phonenumber,timeStamp});
        utils.setSuccess(201,'Booking Success',{...req.body,amazina:names,date: `${date}/${month}/${new Date().getFullYear()}`})
        return utils.send(res)
    }

    static async GetAllBooks(req,res){
        utils.setSuccess(200, 'Fetch Success', db.sundays)
        return utils.send(res)
    }
}
