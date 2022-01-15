export const fetchTrandingMovies = () => {
  // https://api.themoviedb.org/3/trending/movie/week?api_key=<<api_key>>
  const KEY = `0e4aaee08aabcf1cd893aec1f6e895b9`;
  const baseUrl = `https://api.themoviedb.org/3/`;
  const endPoint = `trending/movie/week?`;
  const url = baseUrl + endPoint + `api_key=${KEY}`;
  return fetch(url).then(result => {
    return result.json();
  });
};

export const fetchMovie = ({ id }) => {
  // https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
  const KEY = `0e4aaee08aabcf1cd893aec1f6e895b9`;
  const baseUrl = `https://api.themoviedb.org/3/`;
  const endPoint = `movie/`;
  let moveId = id;
  const url =
    baseUrl + endPoint + moveId + `api_key=${KEY}` + `&language=en-US`;
  return fetch(url).then(result => {
    return result.json();
  });
};

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
