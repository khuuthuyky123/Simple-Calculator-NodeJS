var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    const title = "Simple Calculator";
    res.render('index', { title });
});

router.post('/', (req, res) => {

    const number1 = Number(req.body.number1);
    const number2 = Number(req.body.number2);
    const calculator = req.body.calculation;
    const rst = req.body.reset;
    let addCheck = false;
    let subCheck = false;
    let multCheck = false;
    let divCheck = false;
    let result = 0;

    console.log(addCheck, subCheck, multCheck, divCheck);
    if (calculator == '+') {
        result = number1 + number2;
        addCheck = true;
    } else if (calculator == '-') {
        result = number1 - number2;
        subCheck = true;
    } else if (calculator == '*') {
        result = number1 * number2;
        multCheck = true;
    } else if (calculator == '/') {
        result = number1 / number2;
        divCheck = true;
    }
    console.log(addCheck, subCheck, multCheck, divCheck);
    res.render('index', { number1, number2, result, addCheck, subCheck, multCheck, divCheck });
});

module.exports = router;