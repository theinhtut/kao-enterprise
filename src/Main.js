import React from 'react'
import { fade, makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import ListItem from '@material-ui/core/ListItem'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'
import ListItemText from '@material-ui/core/ListItemText'
import { createBrowserHistory } from 'history'
import { Link, Router, Route, Switch } from 'react-router-dom'
import Dashboard from './Dashboard/Dashboard'
import Request from './Dashboard/Request'
import Divider from '@material-ui/core/Divider'
import CreateUnitProfile from './components/CreateUnitProfile'
import ServiceRequestForm from './components/ServiceRequestForm'
import ViewUnitProfile from './components/ViewUnitProfile'
import logo from './images/k-e-white.svg'
// import Header from './Header'
// import history from '../history';

export const history = createBrowserHistory()

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: 'red'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    marginTop: '4em',
    padding: theme.spacing(3)
  },
  toolbar: theme.mixins.toolbar,
  avatar: {
    backgroundColor: 'red'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      margin: '0 auto',
      width: 'auto'
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 300,
      '&:focus': {
        width: 500
      }
    }
  }
}))

const Main = () => {
  const classes = useStyles()
  return (
    <Router history={history}>
      <div>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar position='fixed' className={classes.appBar}>
            <Toolbar>
              <img src={logo} alt='' />
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder='Search…'
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
            </Toolbar>
          </AppBar>
          <Drawer
            className={classes.drawer}
            variant='permanent'
            classes={{
              paper: classes.drawerPaper
            }}
          >
            <div className={classes.toolbar} />
            <List>
              <section
                style={{
                  padding: '25px',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center'
                }}
              >
                <Avatar aria-label='avatar' className={classes.avatar}>
                  J
                </Avatar>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginLeft: '10px'
                  }}
                >
                  <div>John Doe</div>
                  <span>contact@example.com</span>
                </div>
              </section>
              <Divider />
              {['dashboard', 'units', 'payment', 'users'].map((text, index) => (
                <Link
                  to={`/${text}`}
                  key={index}
                  style={{
                    color: 'black',
                    textTransform: 'capitalize',
                    textDecoration: 'none'
                  }}
                >
                  <ListItem button key={text}>
                    <ListItemText primary={text} />
                  </ListItem>
                </Link>
              ))}
            </List>
          </Drawer>
          <main className={classes.content}>
            <Switch>
              <Route path='/dashboard' exact component={Dashboard} />
              <Route path='/request/' exact component={Request} />
              <Route path='/units/' exact component={ViewUnitProfile} />
              <Route path='/request/new' exact component={ServiceRequestForm} />
            </Switch>
            <div className={classes.toolbar} />
          </main>
        </div>
      </div>
    </Router>
  )
}

export default Main
