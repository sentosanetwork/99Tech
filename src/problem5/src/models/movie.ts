import mongoose, { Document, Schema } from 'mongoose';

export interface IMovie extends Document {
    plot: string;
    genres: string[];
    runtime: number;
    cast: string[];
    poster: string;
    title: string;
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
    plot: { type: String },
    genres: { type: [String] },
    runtime: { type: Number },
    cast: { type: [String] },
    poster: { type: String },
    title: { type: String },
    fullplot: { type: String },
    languages: { type: [String] },
    released: { type: Date },
    directors: { type: [String] },
    rated: { type: String },
    awards: {
        wins: { type: Number },
        nominations: { type: Number },
        text: { type: String }
    },
    year: { type: Number },
    imdb: {
        rating: { type: Number },
        votes: { type: Number },
        id: { type: Number }
    },
    countries: { type: [String] },
    type: { type: String },
    tomatoes: {
        viewer: {
            rating: { type: Number },
            numReviews: { type: Number },
            meter: { type: Number }
        },
        fresh: { type: Number },
        critic: {
            rating: { type: Number },
            numReviews: { type: Number },
            meter: { type: Number }
        },
        rotten: { type: Number },
        lastUpdated: { type: Date }
    },
    num_mflix_comments: { type: Number }
});

const Movie = mongoose.model<IMovie>('movies', MovieSchema);
export default Movie;
