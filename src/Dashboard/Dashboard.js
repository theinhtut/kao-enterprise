import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import connect from './../apis/axios'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import MoreVertIcon from '@material-ui/icons/MoreVert'

const useStyles = makeStyles((theme) => ({
  card: {
    width: 500
  },
  servicecard: {
    marginTop: '20px',
    margin: '0 50px',
    width: 1055
  },
  feedcard: {
    maxHeight: 500,
    overflowY: 'scroll',
    width: 500
  },
  media: {
    height: 100,
    width: 125
  },
  avatar: {
    backgroundColor: red[500]
  },
  jobsubmitted: {
    backgroundColor: 'skyblue',
    width: 100,
    height: 100
  },
  requestongoing: {
    backgroundColor: '#e6c300',
    width: 100,
    height: 100
  },
  requestcompleted: {
    backgroundColor: 'green',
    width: 100,
    height: 100
  }
}))

export const Dashboard = () => {
  const classes = useStyles()
  const [ongoing, setOngoing] = useState('');
  const [completed, setCompleted] = useState('');
  const [services, setServices] = useState('');
  const [stats, setStats] = useState('');
  const [premises, setPremises] = useState('');
  const [feeds, setFeeds] = useState('');

  useEffect(() => {
    const fetchDashboard = async () => {
      const result = await connect.get('dashboard/service_requests');
      setOngoing(result.data.on_going_requests)
      setCompleted(result.data.completed_requests)
    };
    fetchDashboard();
  }, []);

  useEffect(() => {
    const fetchServices = async () => {
      const result = await connect.get('dashboard/service_types');
      setServices(result.data)
    };
    fetchServices();
  }, []);

  useEffect(() => {
    const fetchPremises = async () => {
      const result = await connect.get('/dashboard/premises');
      setPremises(result.data)
    };
    fetchPremises();
  }, []);

  useEffect(() => {
    const fetchStats = async () => {
      const result = await connect.get('/dashboard/service_requests/stat');
      setStats(result.data)
    };
    fetchStats();
  }, []);

  useEffect(() => {
    const fetchFeeds = async () => {
      const result = await connect.get('/dashboard/activity_feeds');
      setFeeds(result.data)
    };
    fetchFeeds();
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly'
        }}
      >
        <Card className={classes.card} style={{maxHeight: 500, overflow: 'scroll'}}>
          <CardHeader
            title='Job Stats'
          />
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <CardContent>
              <label>Requests Submitted</label>
              <Avatar aria-label="complete" className={classes.jobsubmitted}>
                <span style={{fontSize: '36px'}}>{stats.total_count}</span>
              </Avatar>
            </CardContent>
          </div>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <CardContent>
              <label>Requests Ongoing</label>
              <Avatar aria-label="ongoing" className={classes.requestongoing}>
                <span style={{fontSize: '36px'}}>{stats.ongoing_count}</span>
              </Avatar>
            </CardContent>
            <CardContent>
              <label>Requests Completed</label>
              <Avatar aria-label="completed" className={classes.requestcompleted}>
                <span style={{fontSize: '36px'}}>{stats.completed_count}</span>
              </Avatar>
            </CardContent>
          </div>
        </Card>

        <Card className={classes.feedcard}>
          <CardHeader
            title='Activity Feed'
          />
          <CardContent>
            {feeds && feeds.map((feed, index) => (
            <Card key={index} style={{marginTop: '12px', padding: '8px'}}>
              <label style={{textTransform: 'capitalize', fontSize: '20px'}}>{feed.activity_type}</label><br />
              <label>{new Date(feed.created_at).toDateString()} - {feed.detail}</label>
            </Card>
            )
            )}
          </CardContent>
        </Card>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: '20px'
        }}
      >
        <Card className={classes.card}>
          <CardHeader
            action={
              <IconButton aria-label='settings'>
                <MoreVertIcon />
              </IconButton>
            }
            title='Ongoing Request'
          />
          <CardContent>
          {ongoing && ongoing.map((text, index) => (
            <Card key={index} style={{marginTop: '12px'}}>
              <Link to={'/requestdetails'} style={{textDecoration:'none'}}>
                <CardContent>
                  <Typography variant='body2' color='textSecondary' component='p'>
                    {`${text.service_type_name} @ ${text.service_area_name}`}
                  </Typography>
                </CardContent>
              </Link>
            </Card>
            )
          )}
          </CardContent>
        </Card>

        <Card className={classes.card}>
          <CardHeader
            action={
              <IconButton aria-label='settings'>
                <MoreVertIcon />
              </IconButton>
            }
            title='Completed Request'
          />
          <CardContent>
          {completed && completed.map((text, index) => (
            <Card key={index} style={{marginTop: '12px'}}>
              <Link to={'/requestdetails'} style={{textDecoration:'none'}}>
                <CardContent>
                  <Typography variant='body2' color='textSecondary' component='p'>
                    {`${text.service_type_name} @ ${text.service_area_name}`}
                  </Typography>
                </CardContent>
              </Link>
            </Card>
            )
          )}
          </CardContent>
        </Card>
      </div>

      <div>
        <Card className={classes.servicecard}>
          <CardHeader title='Related Services' />
          <CardContent style={{ display: 'flex', flexDirection: 'row' }}>
            {services && services.map((service, index) => (
              <Card key={index} style={{ padding: '12px', marginLeft: '12px' }}>
                <Link to={'/request/new'} style={{textDecoration:'none'}}>
                  <CardContent>
                    <CardMedia
                      className={classes.media}
                      image={service.url}
                    />
                    <Typography gutterBottom variant='h5' component='h2'>
                      {service.name}
                    </Typography>
                  </CardContent>
                </Link>
              </Card>
            )
            )}
          </CardContent>
        </Card>
      </div>

      <div>
        <Card className={classes.servicecard}>
          <CardHeader title='Related Units' />
          <CardContent style={{ display: 'flex', flexDirection: 'row' }}>
            {premises && premises.map((premise, index) => (
              <Card key={index} style={{ padding: '12px', marginLeft: '12px' }}>
                <CardContent>
                  <CardMedia
                    className={classes.media}
                    image={premise.image_url}
                  />
                  <Typography gutterBottom variant='h5' component='h2'>
                    {premise.name}
                  </Typography>
                </CardContent>
              </Card>
            )
            )}
          </CardContent>
        </Card>
      </div>

    </div>
  )
}

export default Dashboard