const joi = require("joi");


module.exports.registerValidation = (data) => {
        const schema = joi.object({
            phone: joi.number().min(6).required(),
            name: joi.string().min(6).trim().required(),
            email: joi.string().min(6).required(),
            username: joi.string().min(6)
        }).unknown();
    
    return schema.validate(data);
}