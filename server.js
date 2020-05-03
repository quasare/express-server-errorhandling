const express = require('express')
const {
    mean,
    median,
    mode,
    getArray
} = require('./math')
const ExpressError = require("./expressError")

const app = express()
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));



app.get('/mean', (req, res, next) => {
    num = req.query.nums
    arr = getArray(num)
    try {
        if (arr.includes(NaN)) {
            throw new ExpressError('Inavlid Number', 400)
        }
        resMean = mean(arr)
        return res.json({
            response: {
                operation: 'mean',
                value: resMean
            }
        })
    } catch (error) {
        next(error)
    }
})

app.get('/median', (req, res, next) => {
    num = req.query.nums
    arr = getArray(num)
    try {
        if (arr.includes(NaN)) {
            throw new ExpressError('Inavlid Number', 400)
        }
        resMedian = median(arr)
        return res.json({
            response: {
                operation: 'median',
                value: resMedian
            }
        })
    } catch (error) {
        next(error)
    }
})
app.get('/mode', (req, res, next) => {
    num = req.query.nums
    arr = getArray(num)
    try {
        if (arr.includes(NaN)) {
            throw new ExpressError('Inavlid Number', 400)
        }
        
        resMode = mode(arr)
        return res.json({
            response: {
                operation: 'mode',
                value: resMode
            }
        })
    } catch (error) {
        next(error)
    }


})


app.use((error, req, res, next) => {
    res.status(error.status).send(error.message)
})
app.listen(3000, function () {
    console.log('App on port 3000');

})