import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TextField,
  Button,
  Paper,
  Grid,
  Typography
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  table: {
    minWidth: 650
  }
}))

function createData(service, date, status, details) {
  return { service, date, status, details }
}

export default function CreateUnitProfile() {
  const classes = useStyles()
  return (
    <section>
      <Typography variant='h4'>Unit Profile</Typography>
      <Grid container spacing={3}>
        <Grid item sm={4}>
          <TextField
            id='filled-full-width'
            label='Name'
            placeholder='B-09-09'
            style={{ margin: 8 }}
            fullWidth
            margin='normal'
            variant='filled'
          />
          <TextField
            id='filled-full-width'
            label='Location'
            placeholder='Enter your location'
            style={{ margin: 8 }}
            fullWidth
            margin='normal'
            variant='filled'
          />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item sm={12}>
          <img
            src='https://icdn7.digitaltrends.com/image/digitaltrends/google_maps_share_location_1-500x300-c.jpg'
            alt=''
          />
        </Grid>
        <Grid item sm={12}>
          <Typography variant='h5'>Transcation</Typography>
        </Grid>
      </Grid>
    </section>
  )
}
