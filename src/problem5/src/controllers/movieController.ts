import { Request, Response } from 'express';
import { createMovieService, getMoviesService, getMovieService, updateMovieService, deleteMovieService } from '../services/movieService';

export const createMovie = async (req: Request, res: Response) => {
    try {
        const movie = await createMovieService(req.body);
        res.status(201).json(movie);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(400).json({ error: 'An unknown error occurred' });
        }
    }
};

export const getMovies = async (req: Request, res: Response) => {
    try {
        const filters = {
            title: req.query.title as string,
            genre: req.query.genre as string,
            year: req.query.year ? parseInt(req.query.year as string) : undefined,
            limit: req.query.limit ? parseInt(req.query.limit as string) : 20,
            offset: req.query.offset ? parseInt(req.query.offset as string) : 0,
        };

        const movies = await getMoviesService(filters);
        res.json(movies);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
};

export const getMovie = async (req: Request, res: Response) => {
    try {
        const movie = await getMovieService(req.params.id);
        if (movie) {
            res.json(movie);
        } else {
            res.status(404).send('Movie not found');
        }
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
};

export const updateMovie = async (req: Request, res: Response) => {
    try {
        const updatedMovie = await updateMovieService(req.params.id, req.body);
        if (updatedMovie) {
            res.json(updatedMovie);
        } else {
            res.status(404).send('Movie not found');
        }
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(400).json({ error: 'An unknown error occurred' });
        }
    }
};

export const deleteMovie = async (req: Request, res: Response) => {
    try {
        const deletedMovie = await deleteMovieService(req.params.id);
        if (deletedMovie) {
            res.status(204).send();
        } else {
            res.status(404).send('Movie not found');
        }
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
};
