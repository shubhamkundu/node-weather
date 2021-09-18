module.exports = {
    requestLog: (req, res, next) => {
        console.log(new Date());
        console.log(`req.originalUrl: ${req.originalUrl}`);
        console.log(`req.query: ${JSON.stringify(req.query)}`);
        console.log(`req.body: ${JSON.stringify(req.body)}`);
        next();
    }
};