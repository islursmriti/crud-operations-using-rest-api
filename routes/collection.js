const express = require("express");
const router = express.Router();
const searchengine = require("../services/collection");

/* GET programming languages. */
router.get("/", async function (req, res, next) {
  try {
    res.json(await searchengine.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting search engine `, err.message);
    next(err);
  }
});
/*search by id*/
router.get('/:id', async function(req, res, next) {
  try {
    res.json(await searchengine.search(req.params.id));
  } catch (err) {
    console.error(`Error while searching programming languages `, err.message);
    next(err);
  }
});
/* POST programming language */
router.post("/", async function (req, res, next) {
  try {
    res.json(await searchengine.create(req.body));
  } catch (err) {
    console.error(`Error while creating search engine`, err.message);
    next(err);
  }
});

/* PUT programming language */
router.put("/:id", async function (req, res, next) {
  try {
    res.json(await searchengine.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating search engine`, err.message);
    next(err);
  }
});

/* DELETE programming language */
router.delete("/:id", async function (req, res, next) {
  try {
    res.json(await searchengine.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting search engine`, err.message);
    next(err);
  }
});

module.exports = router;
