const router = require('express').Router();
const db = require("../../db/db.json");

module.exports = function (router) {
router.get("/notes", function(req, res){
  db.getNotes()
  .then(notes => res.json(notes))
})

router.post('/notes', (req, res) => {
  db.addNotes(req.body)
    .then((note) => res.json(note))
})

}