import Joi from '@hapi/joi';

export const SignIn = Joi.object({
    phonenumber: Joi.string().required(),
    });

export const SignUp = Joi.object({
    amazina: Joi.string().pattern(/^[a-zA-Z0-9 *]{3,25}$/).required(),
    itorero_ryibanze: Joi.string().pattern(/^[a-zA-Z0-9 *]{3,25}$/).required(),
    phonenumber: Joi.string().required(),
    role: Joi.string().required(),
    });

export const Book = Joi.object({
    paruwasi: Joi.string().pattern(/^[a-zA-Z0-9 *]{3,25}$/).required(),
    amazina: Joi.string().pattern(/^[a-zA-Z0-9 *]{3,25}$/).required(),
    service: Joi.number().required(),   
    });

