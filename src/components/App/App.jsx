import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Loader from 'components/Loader';
import NotFoundPage from 'pages/notFound';

const HomePage = lazy(() => import('pages/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage'));

function App() {
  return (
    <>
      <Header title="MOVIES search service" />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
}

export default App;
