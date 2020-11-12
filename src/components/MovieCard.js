import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useClasses = makeStyles({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    flexGrow: '1'
  },
  content: {
    flexGrow: '1',
  },
  poster: {
    flex: '0 0 400px'
  }
})

export default function MovieCard(props) {
  const classes = useClasses();
  const { Title, Year, Poster } = props.movie;

  return (
    <Card  className={classes.root} >
      <CardActionArea className={classes.card}>
        <CardMedia image={ Poster }  className={classes.poster} />
        <CardContent  className={classes.content}>
          <Typography variant="h5">{ Title }</Typography>
          <Typography color="textSecondary">{ Year }</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button color="secondary" variant="contained">Add Movie</Button>
      </CardActions>
    </Card>
  )
}
