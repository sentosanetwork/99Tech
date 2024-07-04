import mongoose, { Schema, Document } from 'mongoose';

export interface IMovie extends Document {
    title: string;
    plot: string;
    genres: string[];
    runtime: number;
    cast: string[];
    poster: string;
    fullplot: string;
    languages: string[];
    released: Date;
    directors: string[];
    rated: string;
    awards: {
        wins: number;
        nominations: number;
        text: string;
    };
    lastupdated: string;
    year: number;
    imdb: {
        rating: number;
        votes: number;
        id: number;
    };
    countries: string[];
    type: string;
    tomatoes: {
        viewer: {
            rating: number;
            numReviews: number;
            meter: number;
        };
        fresh: number;
        critic: {
            rating: number;
            numReviews: number;
            meter: number;
        };
        rotten: number;
        lastUpdated: Date;
    };
    num_mflix_comments: number;
}

const MovieSchema: Schema = new Schema({
    title: { type: String, required: true },
    plot: { type: String },
    genres: { type: [String] },
    runtime: { type: Number },
    cast: { type: [String] },
    poster: { type: String },
    fullplot: { type: String },
    languages: { type: [String] },
    released: { type: Date },
    directors: { type: [String] },
    rated: { type: String },
    awards: {
        wins: { type: Number },
        nominations: { type: Number },
        text: { type: String },
    },
    lastupdated: { type: String },
    year: { type: Number },
    imdb: {
        rating: { type: Number },
        votes: { type: Number },
        id: { type: Number },
    },
    countries: { type: [String] },
    type: { type: String },
    tomatoes: {
        viewer: {
            rating: { type: Number },
            numReviews: { type: Number },
            meter: { type: Number },
        },
        fresh: { type: Number },
        critic: {
            rating: { type: Number },
            numReviews: { type: Number },
            meter: { type: Number },
        },
        rotten: { type: Number },
        lastUpdated: { type: Date },
    },
    num_mflix_comments: { type: Number },
});

export default mongoose.model<IMovie>('movies', MovieSchema);

/**
 * @swagger
 * components:
 *   schemas:
 *     Movie:
 *       type: object
 *       required:
 *         - title
 *       properties:
 *         title:
 *           type: string
 *           description: The movie title
 *         plot:
 *           type: string
 *           description: The movie plot
 *         genres:
 *           type: array
 *           items:
 *             type: string
 *           description: List of genres
 *         runtime:
 *           type: integer
 *           description: The movie runtime in minutes
 *         cast:
 *           type: array
 *           items:
 *             type: string
 *           description: List of cast members
 *         poster:
 *           type: string
 *           description: The movie poster URL
 *         fullplot:
 *           type: string
 *           description: The full plot of the movie
 *         languages:
 *           type: array
 *           items:
 *             type: string
 *           description: List of languages
 *         released:
 *           type: string
 *           format: date
 *           description: The release date
 *         directors:
 *           type: array
 *           items:
 *             type: string
 *           description: List of directors
 *         rated:
 *           type: string
 *           description: The movie rating
 *         awards:
 *           type: object
 *           properties:
 *             wins:
 *               type: integer
 *             nominations:
 *               type: integer
 *             text:
 *               type: string
 *         lastupdated:
 *           type: string
 *           description: The last update date
 *         year:
 *           type: integer
 *           description: The release year
 *         imdb:
 *           type: object
 *           properties:
 *             rating:
 *               type: number
 *             votes:
 *               type: integer
 *             id:
 *               type: integer
 *         countries:
 *           type: array
 *           items:
 *             type: string
 *           description: List of countries
 *         type:
 *           type: string
 *           description: The type of movie
 *         tomatoes:
 *           type: object
 *           properties:
 *             viewer:
 *               type: object
 *               properties:
 *                 rating:
 *                   type: number
 *                 numReviews:
 *                   type: integer
 *                 meter:
 *                   type: integer
 *             fresh:
 *               type: integer
 *             critic:
 *               type: object
 *               properties:
 *                 rating:
 *                   type: number
 *                 numReviews:
 *                   type: integer
 *                 meter:
 *                   type: integer
 *             rotten:
 *               type: integer
 *             lastUpdated:
 *               type: string
 *               format: date
 *         num_mflix_comments:
 *           type: integer
 *           description: Number of comments on the movie
 *       example:
 *         title: The Great Train Robbery
 *         plot: A group of bandits stage a brazen train hold-up, only to find a determined posse hot on their heels.
 *         genres: [Short, Western]
 *         runtime: 11
 *         cast: [A.C. Abadie, Gilbert M. 'Broncho Billy' Anderson, George Barnes, Justus D. Barnes]
 *         poster: https://m.media-amazon.com/images/M/MV5BMTU3NjE5NzYtYTYyNS00MDVmLWIwYjgtMmYwYWIxZDYyNzU2XkEyXkFqcGdeQXVyNzQzNzQxNzI@._V1_SY1000_SX677_AL_.jpg
 *         fullplot: Among the earliest existing films in American cinema - notable as the first film that presented a narrative story to tell - it depicts a group of cowboy outlaws who hold up a train and rob the passengers. They are then pursued by a Sheriff's posse. Several scenes have color included - all hand tinted.
 *         languages: [English]
 *         released: 1903-12-01
 *         directors: [Edwin S. Porter]
 *         rated: TV-G
 *         awards: { wins: 1, nominations: 0, text: 1 win. }
 *         lastupdated: 2015-08-13 00:27:59.177000000
 *         year: 1903
 *         imdb: { rating: 7.4, votes: 9847, id: 439 }
 *         countries: [USA]
 *         type: movie
 *         tomatoes: {
 *           viewer: { rating: 3.7, numReviews: 2559, meter: 75 },
 *           fresh: 6,
 *           critic: { rating: 7.6, numReviews: 6, meter: 100 },
 *           rotten: 0,
 *           lastUpdated: 2015-08-08T00:02:50.000Z
 *         }
 *         num_mflix_comments: 0
 */

