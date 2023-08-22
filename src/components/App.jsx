import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout/Layout';

import { fetchTrending } from 'services/TmbdApi';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Videos/Videos'));
const MovieDetails = lazy(() => import('pages/VideoDetails/VideoDetails'));
const Cast = lazy(() => import('pages/Cast/Cast'));
const Reviews = lazy(() => import('pages/Reviews/Reviews'));

export const App = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetch() {
      try {
        const movies = await fetchTrending();
        setMovies([...movies]);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home movies={movies} />} />
        <Route path="movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
