import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Paper, Grid, ButtonBase, Typography } from '@material-ui/core'
import buildingImg from '../images/building.svg'
import '../styles/unit-profile.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}))
const serviceArea = [
  {
    name: 'Uptown',
    imageUrl: 'https://material-ui.com/static/images/grid/complex.jpg'
  },
  {
    name: 'TTDI',
    imageUrl: 'https://material-ui.com/static/images/grid/complex.jpg'
  },
  {
    name: 'Sunway',
    imageUrl: 'https://material-ui.com/static/images/grid/complex.jpg'
  },
  {
    name: 'Bandar Utama',
    imageUrl: 'https://material-ui.com/static/images/grid/complex.jpg'
  },
  {
    name: 'Puchong',
    imageUrl: 'https://material-ui.com/static/images/grid/complex.jpg'
  }
]

export default function FullWidthGrid() {
  const classes = useStyles()
  function FormRow({ text = '', imageUrl = '' }) {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <img className={classes.img} alt='complex' src={imageUrl} />
            <Typography gutterBottom variant='subtitle1'>
              {text}
            </Typography>
          </Paper>
        </Grid>
      </React.Fragment>
    )
  }

  return (
    <section>
      <Typography variant='h4'>Units</Typography>
      <div>
        <Button
          onClick={() => console.log('you have clicked')}
          variant='contained'
        >
          Create Unit
        </Button>
      </div>
      <div className='unit-profile'>
        <img className='unit-profile__img' src={buildingImg} alt=''/>
      </div>
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            {serviceArea.map((sa, index) => (
              <FormRow key={index} text={sa.name} imageUrl={sa.imageUrl} />
            ))}
          </Grid>
        </Grid>

        {/* <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>xs=12</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>xs=12 sm=6</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>xs=12 sm=6</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
        </Grid> */}
      </div>
    </section>
  )
}
