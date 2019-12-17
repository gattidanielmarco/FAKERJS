var express = require('express');
var router = express.Router();
var faker = require('faker');
let vett = new Array();
const fs = require('fs');
const poeti = require('../vettPoeti');
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send(createFakePerson());
});

router.get('/profile', (req, res) => {
    
    const r = poeti.find(p => p.id == req.query.id);
    console.log(r);
    res.render('profile', {title : `About ${r.nome}`, r}); // l è il nome del file

    
});



function createFakePerson() {
    let randomName = faker.name.findName(); // Rowan Nikolaus
    let randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
    let randomCard = faker.helpers.createCard(); // random contact card containing many properties

    let person = {
        name: randomName,
        email: randomEmail,
        card: randomCard
    }
    return person;
}

module.exports = router;