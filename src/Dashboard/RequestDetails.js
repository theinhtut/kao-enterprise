import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Typography } from '@material-ui/core'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import '../styles/unit-profile.css'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    overflowX: 'auto',
    margin: '1em auto'
  },
  table: {
    minWidth: 650,
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

  function createNotes(name, action, date) {
    return { name, action, date };
  }

  
  const rows = [
    createData('Transaction ID', '0001'),
    createData('Location', 'Kaodim'),
    createData('Address', 'Level 9 Tower D, Uptown 5, 5 Jalan SS21/39 Damansara Utama'),
    createData('User', 'Fui Yee Choong'),
    createData('Created At', 'Dec 16, 2019')
  ];

  const notes = [
    createNotes('Our pantry sink is always leaking. please help', 'Fui Yoong Choong', 'Dec 5, 2019'),
    createNotes('There isn\'t a damn pipe', 'Vendor Stark', 'Dec 8, 2019'),
    createNotes('Purchased new materials', 'Vendor Stark', 'Dec 11, 2019')
  ];

  const activities = [
    createData('Vendor Stark has added notes', 'Dec 8, 2019'),
    createData('Vendor Stark has purchased materials', 'Dec 11, 2019'),
    createData('Bill has been paid', 'Dec 18, 2019')
  ];
  

export default function RequestDetails() {
  const classes = useStyles()
  return (
    <section>
      <Typography variant='h4'>Plumbing Repair at Kaodim</Typography>
      <div style={{fontSize:'22px', marginTop: '2em'}}>Request Details</div>
      <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>
                {row.action}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>

    <div style={{fontSize:'22px', marginTop: '2em'}}>Additional Notes</div>
      <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
      <TableHead>
          <TableRow>
            <TableCell>Comments</TableCell>
            <TableCell>Person</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {notes.map(note => (
            <TableRow key={note.name}>
              <TableCell component="th" scope="row">
                {note.name}
              </TableCell>
              <TableCell>
                {note.action}
              </TableCell>
              <TableCell>
                {note.date}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>

    <div style={{fontSize:'22px', marginTop: '2em'}}>Activity</div>
      <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
      <TableHead>
          <TableRow>
            <TableCell>Activity</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {activities.map(act => (
            <TableRow key={act.name}>
              <TableCell component="th" scope="row">
                {act.name}
              </TableCell>
              <TableCell>
                {act.action}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>

    </section>
  )
}
