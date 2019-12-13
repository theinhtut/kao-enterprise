import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Paper, Typography } from '@material-ui/core'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginBottom: '1em'
  },
}));

function createData(name, date, amount) {
  return { name, date, amount };
}

const rows = [
  createData('Renovation', 'Dec 6, 2019', 'RM 200'),
  createData('Plumbing Repair', 'Dec 10, 2019', 'RM 100'),
  createData('House Cleaning', 'Dec 13, 2019', 'RM 60'),
  createData('Pest Control', 'Dec 17, 2019', 'RM 250')
];

export default function Payment() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [month, setMonth] = React.useState(12);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleMonthChange = (event, newValue) => {
    setMonth(newValue.props.value);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Invoice" {...a11yProps(0)} />
          <Tab label="Payment Details" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Month</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={month}
          onChange={handleMonthChange}
        >
          <MenuItem value={12}>December 2019</MenuItem>
          <MenuItem value={11}>November 2019</MenuItem>
          <MenuItem value={10}>October 2019</MenuItem>
        </Select>
      </FormControl>

      <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>
                {row.date}
              </TableCell>
              <TableCell>
                {row.amount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Card>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <CardContent>
              <b>Card Holder</b>
              <br /><br />
              Choong Fui Yu
              <br /><br />
              Level 9 Tower D, Uptown 5, 5 Jalan SS21/39
              <br />
              Selangor, Selangor 47400
            </CardContent>

            <CardContent>
              <span style={{color: 'blue', cursor: 'pointer'}}>Change</span>
              <br /><br />
              <b>Credit / Debit Card</b>
              <br /><br />
              MasterCard
              <br />
              **** ****** **** 2989
              <br />
              Expires on **/24
            </CardContent>
          </div>
        </Card>
      </TabPanel>
    </div>
  );
}