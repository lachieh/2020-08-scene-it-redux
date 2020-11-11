import { Button, Container, Grid, TextField, Typography } from '@material-ui/core';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import MovieCard from './components/MovieCard';
import { setData } from './redux/actions';

function App() {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.results)

  const handleSubmit = (e) => {
    e.preventDefault();

    const encodedSearch = encodeURIComponent(search);
    // get movies from API
    fetch(`http://www.omdbapi.com/?apikey=59354c85&s=${encodedSearch}`)
      .then(res => res.json())
      .then(data => {
        dispatch(setData(data.Search));
      })
  }

  return (
    <Container>
      <Typography variant="h1" align="center">Scene It!</Typography>
      <Grid container direction="row" justify="center" alignItems="center">
        <form onSubmit={handleSubmit}>
          <TextField label="Search" variant="outlined" value={search} onChange={(e) => {setSearch(e.target.value)}} />
          <Button type="submit" variant="contained" size="large">Search</Button>
        </form>
      </Grid>
      <Grid container spacing={3}>
        { movies.map(movie => {
          return (
            <Grid item xs={3} key={movie.imdbID}>
              <MovieCard movie={movie} />
            </Grid>
          )
        }) }
      </Grid>
    </Container>
  );
}

export default App;
