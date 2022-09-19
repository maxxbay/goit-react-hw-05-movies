async function getMovieDetails(movieId) {
  const key = '228bf13a475fd3c7d68f4b12f31b0a1c';
  const url = `https://api.themoviedb.org/3/movie/${movieId}`;
  const filter = `?api_key=${key}&language=en-US`;

  const response = await fetch(`${url}${filter}`);
  const data = await response.json();

  return data;
}

export default getMovieDetails;
