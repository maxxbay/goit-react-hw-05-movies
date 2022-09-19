async function getSearchMovies(query, page = 1) {
  const key = '228bf13a475fd3c7d68f4b12f31b0a1c';
  const url = `https://api.themoviedb.org/3/search/movie`;
  const filter = `?api_key=${key}&query=${query}&language=en-US&page=${page}&include_adult=false`;

  const response = await fetch(`${url}${filter}`);
  const data = await response.json();

  return data;
}

export default getSearchMovies;
