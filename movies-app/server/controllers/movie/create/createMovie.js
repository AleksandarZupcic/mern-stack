const Movie = require("../../models/movie-model");

createMovie = (req, res) => {
    const body = req.body;
    if(!body){
        return res.status(400).json({
            success: false,
            error: "Must provide movie title!"
        })
    }

    const movie = new Movie(body);
    if(!movie){
        return res.status(400).json({
            success: false,
            error: err
        })
    }

    movie
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: movie._id,
                message: "Movie created!"
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: "Movie not created!"
            })
        });
}

//module.exports = createMovie;
export default createMovie;