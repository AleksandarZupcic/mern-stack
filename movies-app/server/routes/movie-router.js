const express = require("express");

const MovieCtrl = require("../controllers/movie/movie-ctrl");

const router = express.Router();

router.post("/movie", MovieCtrl.createMovie);
router.get("/movie", MovieCtrl.getMovies);
router.get("/movie/:id", MovieCtrl.getMovieById);
router.put("/movie/:id", MovieCtrl.updateMovie);
router.delete("/movie/:id", MovieCtrl.deleteMovie);

module.exports = router;