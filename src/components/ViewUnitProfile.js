import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import connect from '../apis/axios'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Paper, Grid, Typography } from '@material-ui/core'
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

export default function ViewUnitProfile() {
  const classes = useStyles()
  const [units, setUnits] = useState('')

  useEffect(() => {
    const fetchUnits = async () => {
      const result = await connect.get('/premises.json')
      console.log(result.data)
      setUnits(result.data)
      // setCompleted(result.data.completed_requests)
    }
    fetchUnits()
  }, [])

  function FormRow({ text = '', imageUrl = '' }) {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <img className='units__img' alt='complex' src={imageUrl} />
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
          <Link
            to={'/units/new'}
            style={{ color: 'black', textDecoration: 'none' }}
          >
            Create Unit
          </Link>
        </Button>
      </div>
      <div className='unit-profile'>
        <img className='unit-profile__img' src={buildingImg} alt='' />
      </div>
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            {units &&
              units.map((sa, index) => (
                <FormRow key={index} text={sa.name} imageUrl={sa.image_url} />
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
