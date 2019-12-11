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
router.get('/2', function(req, res, next) {
 res.send(vett[2]);
});
router.get('/3', function(req, res, next) {
 res.send(vett[3]);
});
router.get('/4', function(req, res, next) {
 res.send(vett[4]);
});
router.get('/5', function(req, res, next) {
 res.send(vett[5]);
});
router.get('/6', function(req, res, next) {
 res.send(vett[6]);
});
router.get('/6', function(req, res, next) {
 res.send(vett[6]);
});
router.get('/7', function(req, res, next) {
 res.send(vett[7]);
});
router.get('/8', function(req, res, next) {
 res.send(vett[8]);
});
router.get('/9', function(req, res, next) {
 res.send(vett[9]);
});
router.get('/10', function(req, res, next) {
 res.send(vett[10]);
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