/** conectando mongoose con Mongo */
const mongoose = require("mongoose");
//no funciona con localhost en la última versíón 17 de Node.js
mongoose.connect("mongodb://127.0.0.1:27017/movieApp", {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
    console.log("Connected to MongoDB");
});

// {
//     title: 'Amadeus',
//     year: 1984,
//     score: 9.2,
//     rating: 'R'
// }

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});


const Movie = mongoose.model("Movie", movieSchema);

// const amadeus = new Movie({title: "Amadeus", year: 1984, score: 9.2, rating: "R"});

/** insertando peliculas con mongoose */
// Movie.insertMany([{title: 'Amelie', year: 2001, score: 8.3, rating: 'R' }
//     , {title: 'The Shining', year: 1980, score: 8.5, rating: 'R' }
//     , {title: 'The Pianist', year: 2002, score: 8.5, rating: 'R' }
//     , {title: 'The Departed', year: 2006, score: 8.5, rating: 'R' }
//     , {title: 'Memento', year: 2000, score: 8.5, rating: 'R' }
//     , {title: 'The Prestige', year: 2006, score: 8.5, rating: 'R' }
//     , {title: 'The Dark Knight', year: 2008, score: 9.0, rating: 'R' }
//     , {title: 'Django Unchained', year: 2012, score: 8.5, rating: 'R' }
//     , {title: 'Kill Bill', year: 2003, score: 8.5, rating: 'R' }
// ])
// .then(data => {
//     console.log("it worked!");
//     console.log(data);
// })

/** usando el método find */








