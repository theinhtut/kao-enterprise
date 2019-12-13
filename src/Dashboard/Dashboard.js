import React, {useState} from 'react'
import connect from './../apis/axios'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
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
    marginTop: '20px',
    // margin: '0 50px',
    width: 500
  },
  avatar: {
    backgroundColor: red[500]
  }
}))

export const Dashboard = () => {
  const classes = useStyles()
  const [ongoing, setOngoing] = useState('');
  let response
  const requestListResp = connect.get('dashboard/service_requests')
  requestListResp.then((res) => {
    setOngoing(res.data.on_going_requests)
  })
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
            <Card>
              <CardContent>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Office Cleaning @ Jalan Wan Kadir
                </Typography>
              </CardContent>
            </Card>
            <Card style={{ marginTop: '12px' }}>
              <CardContent>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Office Cleaning @ Jalan Wan Kadir
                </Typography>
              </CardContent>
            </Card>
            <Card style={{ marginTop: '12px' }}>
              <CardContent>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Office Cleaning @ Jalan Wan Kadir
                </Typography>
              </CardContent>
            </Card>
            <Card style={{ marginTop: '12px' }}>
              <CardContent>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Office Cleaning @ Jalan Wan Kadir
                </Typography>
              </CardContent>
            </Card>
            <Card style={{ marginTop: '12px' }}>
              <CardContent>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Office Cleaning @ Jalan Wan Kadir
                </Typography>
              </CardContent>
            </Card>
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
            <Card>
              <CardContent>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Office Cleaning @ Jalan Wan Kadir
                </Typography>
              </CardContent>
            </Card>
            <Card style={{ marginTop: '12px' }}>
              <CardContent>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Office Cleaning @ Jalan Wan Kadir
                </Typography>
              </CardContent>
            </Card>
            <Card style={{ marginTop: '12px' }}>
              <CardContent>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Office Cleaning @ Jalan Wan Kadir
                </Typography>
              </CardContent>
            </Card>
            <Card style={{ marginTop: '12px' }}>
              <CardContent>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Office Cleaning @ Jalan Wan Kadir
                </Typography>
              </CardContent>
            </Card>
            <Card style={{ marginTop: '12px' }}>
              <CardContent>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Office Cleaning @ Jalan Wan Kadir
                </Typography>
              </CardContent>
            </Card>
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
            <Card style={{marginTop: '8px'}}>
              <CardContent>
                <Typography variant='body2' color='textSecondary' component='p'>
                  {text.service_type_name}
                </Typography>
              </CardContent>
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
            <Card>
              <CardContent>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Office Cleaning @ Jalan Wan Kadir
                </Typography>
              </CardContent>
            </Card>
            <Card style={{ marginTop: '12px' }}>
              <CardContent>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Office Cleaning @ Jalan Wan Kadir
                </Typography>
              </CardContent>
            </Card>
            <Card style={{ marginTop: '12px' }}>
              <CardContent>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Office Cleaning @ Jalan Wan Kadir
                </Typography>
              </CardContent>
            </Card>
            <Card style={{ marginTop: '12px' }}>
              <CardContent>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Office Cleaning @ Jalan Wan Kadir
                </Typography>
              </CardContent>
            </Card>
            <Card style={{ marginTop: '12px' }}>
              <CardContent>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Office Cleaning @ Jalan Wan Kadir
                </Typography>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>

      <div>
        <Card className={classes.servicecard}>
          <CardHeader title='Related Services' />
          <CardContent style={{ display: 'flex', flexDirection: 'row' }}>
            <Card style={{ padding: '12px' }}>
              <CardContent>
                <CardMedia
                  className={classes.media}
                  image='/static/images/cards/contemplative-reptile.jpg'
                  title='Contemplative Reptile'
                />
                <Typography gutterBottom variant='h5' component='h2'>
                  Lizard
                </Typography>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>

      <div>
        <Card className={classes.servicecard}>
          <CardHeader title='Related Units' />
          <CardContent style={{ display: 'flex', flexDirection: 'row' }}>
            <Card style={{ padding: '12px' }}>
              <CardContent>
                <CardMedia
                  className={classes.media}
                  image='/static/images/cards/contemplative-reptile.jpg'
                  title='Contemplative Reptile'
                />
                <Typography gutterBottom variant='h5' component='h2'>
                  Lizard
                </Typography>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>

    </div>
  )
}

export default Dashboard