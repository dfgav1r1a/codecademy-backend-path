const checkMillionDollarIdea = (req, res, next) => {
    const {weeklyRevenue, numWeeks} = req.body;    
    const million = Math.pow(1000, 2);
    const isMillion = Number(numWeeks) * Number(weeklyRevenue);
    if (isMillion < million || !weeklyRevenue || !numWeeks || isNaN(isMillion)) {
        res.status(400).send('Your idea is not worth it, comeback with a better one');
    } else {
        next();
    }
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
