import models from '../models';

const { users } = models;

export default class userServices {
    static createNewUser(newUser){
        return users.create(newUser);
    }

    static getUser(prop) {
        return users.findOne({
            where: { username:prop },
          });
    }
}