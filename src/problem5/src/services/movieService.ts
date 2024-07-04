import Movie, { IMovie } from '../models/movie';

export const createMovieService = async (movieData: IMovie): Promise<IMovie> => {
    const movie = new Movie(movieData);
    return await movie.save();
};

export const getMoviesService = async (): Promise<IMovie[]> => {
    return await Movie.find();
};

export const getMovieService = async (id: string): Promise<IMovie | null> => {
    return await Movie.findById(id);
};

export const updateMovieService = async (id: string, movieData: Partial<IMovie>): Promise<IMovie | null> => {
    return await Movie.findByIdAndUpdate(id, movieData, { new: true });
};

export const deleteMovieService = async (id: string): Promise<IMovie | null> => {
    return await Movie.findByIdAndDelete(id);
};
