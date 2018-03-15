const nodemailer = require('nodemailer');
const secret = require('./secret')

module.exports = (from,text)=>{
    return new Promise((resolve,reject)=>{

        const transporter = nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:secret.email,
                pass:secret.pass
            }
        });

        transporter.sendMail({
            from,
            to:secret.admin,
            subject:'feedback',
            text

        },(err,info)=>{
            if(err) reject(err);
            else resolve(info);
        });

    });


}
