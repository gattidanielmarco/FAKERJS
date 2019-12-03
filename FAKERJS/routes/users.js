var express = require('express');
var router = express.Router();
var faker = require('faker');
let vett = new Array();

/* GET users listing. */
router.get('/', function(req, res, next) {
 res.send(createFakePerson());
});

router.get('/ten', function(req, res, next) {
    
    for (let index = 0; index < 10; index++) {
        vett.push(createFakePerson());
    }
    res.send(vett);
});

router.get('/1', function(req, res, next) {
 res.send(vett[1]);
});

function createFakePerson()
{
 let randomName = faker.name.findName(); // Rowan Nikolaus
 let randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
 let randomCard = faker.helpers.createCard(); // random contact card containing many properties

 let person = {
   name:randomName,
   email:randomEmail,
   card: randomCard
 }
 return person;
}

module.exports = router;