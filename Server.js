const express = require("express");
const hbs = require('hbs')
const app = express();


app.use(express.static('public'));



addRequestDate = (req, res, next) => {
    let requestAt = new Date()
    console.log(requestAt)
    next()
}
app.set('view engine', hbs)

app.get('/HomePage',addRequestDate, (req, res) => {

    res.render('HomePage.hbs')
}
)

app.get('/services',addRequestDate, (req, res) => {

    res.render('services.hbs')
}
)

app.get('/contactUs',addRequestDate, (req, res) => {

    res.render('contactUs.hbs' )
}
)


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(` service is runing ${port}`);
})



