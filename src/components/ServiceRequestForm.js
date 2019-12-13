import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, TextField } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}))

export default function ServiceRequestForm() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div>
        <TextField
          id='filled-full-width'
          label='Unit Number'
          style={{ margin: 8 }}
          fullWidth
          margin='normal'
          variant='filled'
        />
        <TextField
          id='filled-full-width'
          label='Owner Name'
          style={{ margin: 8 }}
          fullWidth
          margin='normal'
          variant='filled'
        />
        <TextField
          id='filled-full-width'
          label='Contact Number'
          style={{ margin: 8 }}
          fullWidth
          margin='normal'
          variant='filled'
        />
        <TextField
          id='filled-full-width'
          label='Additonal Notes'
          style={{ margin: 8 }}
          fullWidth
          margin='normal'
          variant='filled'
          helperText='Maximum 300 charaters'
        />
        <Button variant='contained' color='primary'>Submit Request</Button>
      </div>
    </div>
  )
}
