import React from 'react'



import axios from 'axios';
import { useEffect, useState } from 'react';



export default function MoviesDb() {

    const [trindingMovies, setTrindingMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);



    async function fetchMoviesData() {
        try {
            setLoading(true);
            setError(null);
            const { data } = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=99aa11968366eeb59fc06e978ca5ce2a&language=en-US&page=2');
            setTrindingMovies(data.results);
        } catch (err) {
            console.error(err);
            setError(err?.message || 'Failed to fetch movies');
        } finally {
            setLoading(false);
        }
    }




    useEffect(() => {
        fetchMoviesData();
    }, [])

    return (
        <div className='container py-5'>
            <div className='row'>
                <h2>Trinding Movies</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                {loading ? (
                    <div className="d-flex justify-content-center align-items-center w-100 py-5">
                        <div className="text-center">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <div className="mt-2">Loading movies...</div>
                        </div>
                    </div>
                ) : error ? (
                    <div className="alert alert-danger" role="alert">
                        {error}
                    </div>
                ) : trindingMovies.length === 0 ? (
                    <div className="text-center p-4">No movies available.</div>
                ) : trindingMovies.map((movie, index) =>
                    <div key={movie.id} className='col-md-4 my-3'>
                        <div className='movie my-2' >
                            <img className='w-100' src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt={movie.title} />
                            <h5 className='mt-3'>{movie.title}</h5>
                            <p>{movie.overview}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
