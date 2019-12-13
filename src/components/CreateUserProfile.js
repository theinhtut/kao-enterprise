import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import {
  Button,
  TextField,
  Paper,
  Grid,
  ButtonBase,
  Typography
} from '@material-ui/core'
import '../styles/service-request-form.css'
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import '../styles/unit-profile.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  avatar: {
    height: 175,
    width: 175
  }
}))

export default function CreateUserProfile() {
  const classes = useStyles()
  const [path, setPath] = useState('')

  if (window.location.pathname === 'users/edit') {
    setPath('edit')
  }

  return (
    <section>
      <Typography variant='h4'>Users</Typography>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Card
          style={{
            marginTop: '12px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            width: 800
          }}
        >
          <div>
            <CardContent>
              <Avatar src='/broken-image.jpg' className={classes.avatar} />
            </CardContent>
          </div>
          <div
            style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}
          >
            <CardContent>
              <TextField
                id='filled-full-width'
                label='Name'
                style={{ margin: 8 }}
                fullWidth
                margin='normal'
                variant='filled'
              />
            </CardContent>
            <CardContent>
              <TextField
                id='filled-full-width'
                label='Email'
                style={{ margin: 8 }}
                fullWidth
                margin='normal'
                variant='filled'
              />
            </CardContent>
            <CardContent>
              <TextField
                id='filled-full-width'
                label='Phone Number'
                style={{ margin: 8 }}
                fullWidth
                margin='normal'
                variant='filled'
              />
            </CardContent>
            <CardContent>
              <TextField
                id='filled-full-width'
                label='Address'
                style={{ margin: 8 }}
                fullWidth
                margin='normal'
                variant='filled'
              />
            </CardContent>
          </div>
        </Card>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}></div>
      <Button style={{marginLeft: 500, marginTop: '2em'}}className='request-form__btn' variant='contained' color='primary'>
        <Link style={{color: 'white', textDecoration: 'none'}}to={'/users'}>Submit</Link>
      </Button>
    </section>
  )
}
