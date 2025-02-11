//1. ERROR HANDLING
const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err, //it is supposed to be 'error' not 'err'
    message: err.message,
    stack: err.stack, // you missed 'stack'
  });
};

const sendErrorProd = (err, res) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    res.status(500).json({
      status: "error",
      message: "Something went very wrong",
    });
  }
};

module.exports = (err, res, next, req) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    //it is supposed to be thripple equals to not two.
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === "production") {
    sendErrorProd(err, res);
  }
};

//catchAsync and AppError
module.exports = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};

class AppError extends Error {
  constructor(message, statusCode) {
    super(message);

    this.statusCode = statusCode;
    this.status = `${this.statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

//2. EMAIL HANDLER
const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransporter({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  //Mail options
  const mailOptions = {
    from: "Udemba Arnold <udembao429@gmail.com>",
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  //Sending the message
  await transporter.sendEmail(mailOptions);
};

module.exports = sendEmail;
