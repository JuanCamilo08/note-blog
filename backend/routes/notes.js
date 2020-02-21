const express = require('express');
const { validationNote, Note } = require('../models/note');
const validator = require('../middleware/validate');
const validateObjectId = require('../middleware/validateObjectId');

const router = express.Router();

router.get('/', async (req, res) => {
  const notes = await Note.find();
  res.send(notes);
});

router.get('/:id', validateObjectId, async (req, res) => {
  const note = await Note.findById(req.params.id);

  if (!note) return res.status(404).send('note not found.');

  res.send(note);
});

router.post('/', validator(validationNote), async (req, res) => {
  const { title, content, creationDate } = req.body;
  let note = new Note({ title, content, creationDate });
  note = await note.save();

  res.status(201).send(note);
});

router.put('/:id', [validateObjectId, validator(validationNote)], async (req, res) => {
  const { title, content } = req.body;
  const note = await Note.findByIdAndUpdate(
    req.params.id,
    {
      title,
      content,
      modifiedDate: new Date()
    },
    { new: true }
  );

  if (!note) return res.status(404).send('Note with the given ID was not found.');

  res.send(note);
});

router.delete('/:id', validateObjectId, async (req, res) => {
  const note = await Note.findByIdAndDelete(req.params.id);

  if (!note) return res.status(404).send('Note with the given ID was not found.');

  res.status(200).end();
});

module.exports = router;
