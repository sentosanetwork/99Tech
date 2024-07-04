import Movie from '../models/movie';

interface MovieFilters {
    title?: string;
    genre?: string;
    year?: number;
}

export const createMovieService = async (movieData: any) => {
    const movie = new Movie(movieData);
    return await movie.save();
};

export const getMoviesService = async (filters: MovieFilters) => {
    const query: any = {};
    
    if (filters.title) {
        query.title = { $regex: filters.title, $options: 'i' }; // Case-insensitive regex search
    }

    if (filters.genre) {
        query.genres = { $in: [filters.genre] };
    }

    if (filters.year) {
        query.year = filters.year;
    }

    console.log(`getMoviesService query`, query);
    const movies = await Movie.find(query);
    console.log(`getMoviesService movies`, movies);
    return movies;
};

export const getMovieService = async (id: string) => {
    return await Movie.findById(id);
};

export const updateMovieService = async (id: string, movieData: any) => {
    return await Movie.findByIdAndUpdate(id, movieData, { new: true });
};

export const deleteMovieService = async (id: string) => {
    return await Movie.findByIdAndDelete(id);
};
