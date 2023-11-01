const winston = require("winston");
const { config } = require("../../config");

const transports = [
    new winston.transports.Console({level: config.isProd ? "http" : "verbose"}),
    
]

if (config.isProd) {
    transports.push(new winston.transports.File({filename: "prod.log", level: "warn"}))
}
const logger = winston.createLogger({
    transports
})

module.exports = (req, res, next) => {
    req.logger = logger;
    // req.logger.error(`${req.method} ${req.url} - ${new Date().toLocaleDateString()}`)
    next();
}