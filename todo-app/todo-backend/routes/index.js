const express = require('express');
const router = express.Router();
const redis = require('../redis');

const configs = require('../util/config')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

/* GET /statistics endpoint*/
router.get('/statistics', async (req, res) => {
  const addedTodosCounter = await redis.getAsync('added_todos')
  const value = Number(addedTodosCounter)
  if (Number.isNaN(value)) {
    res.send({ added_todos: 0 })
  } else {
    res.send({ added_todos: value })
  }
})

module.exports = router;
