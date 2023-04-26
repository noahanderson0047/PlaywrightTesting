const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD

    }
});

run();

async function run() {
    console.log('Running report...');
    await transporter.sendMail({
        from: process.env.DAILY_REPORT_FROM,
        to: process.env.DAILY_REPORT_TO,
        subject: 'Daily Report',
        text: `
          Daily Report
        `,
        html: `
          <h1>Daily Report</h1>
        `,
      });


};


