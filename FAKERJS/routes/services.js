var express = require('express');
var router = express.Router();
var faker = require('faker');
const poeti = require('../vettPoeti');
const path = require('path');
let vettImage = new Array();
/* GET users listing. */
router.get('/file', function(req, res, next){
    for (let index = 0; index < 10; index++) {
        console.log(poeti[index]);
        
    }
    res.send(poeti);
});
router.get('/poeta', function(req, res, next){
    const r = poeti.find(p => p.id == req.query.id);
    res.send(poeti[r.id]);
    
});
router.get('/images',function(req, res, next){
    for (let index = 0; index < 10; index++) {
        vettImage[index] = poeti[index].immagine;
        
    }
    res.send(vettImage);
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