import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Paper, Typography } from '@material-ui/core'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import '../styles/unit-profile.css'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '500px',
    overflowX: 'auto',
    margin: '3em auto'
  },
  table: {
    width: 500,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}))

function createData(name, action) {
    return { name, action };
  }
  
  const rows = [
    createData('Bruce Banner', 'View'),
    createData('Tony Stark', 'View'),
    createData('Steve Rogers', 'View'),
    createData('Peter Parker', 'View'),
    createData('Tuyul', 'View')
  ];
  

export default function ViewUserProfile() {
  const classes = useStyles()
  return (
    <section>
      <Typography variant='h4'>Users</Typography>
      <div>
        <Button
          onClick={() => console.log('you have clicked')}
          variant='contained'
        >
          <Link style={{color: 'black', textDecoration: 'none'}}to={'/users/edit'}>
            Create A New User
          </Link>
        </Button>
      </div>

      <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell style={{color: 'blue', cursor: 'pointer'}}>
                <Link to={'users/edit'}>{row.action}</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>

    </section>
  )
}
