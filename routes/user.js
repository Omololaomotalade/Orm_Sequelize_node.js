
const express = require("express")
const router = express.Router();
const { User } = require('../models')


router.post('/insert', (req, res) => {
  User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email

  }).catch((err) => {
    if (err){
      console.log(err);
    }
  });
  res.send('insert');
 });


 router.get('/select', (req, res) => {
  User.findAll().then((users) =>{
    res.send(users)

  }).catch((err) => {
    console.log(err);
  })
 });


 router.delete('/delete', (req, res) => {
  User.destroy({ where: { id: 10}});
  res.send('delete');
 });









module.exports = router;