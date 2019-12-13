import React from 'react'
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
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  }
}))

export default function RecipeReviewCard() {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  return (
    <div style={{display:'flex', flexDirection:'row', justifyContent: 'space-evenly'}}>
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
          <Card style={{ marginTop: '8px' }}>
            <CardContent>
              <Typography variant='body2' color='textSecondary' component='p'>
                Office Cleaning @ Jalan Wan Kadir
              </Typography>
            </CardContent>
          </Card>
          <Card style={{ marginTop: '8px' }}>
            <CardContent>
              <Typography variant='body2' color='textSecondary' component='p'>
                Office Cleaning @ Jalan Wan Kadir
              </Typography>
            </CardContent>
          </Card>
          <Card style={{ marginTop: '8px' }}>
            <CardContent>
              <Typography variant='body2' color='textSecondary' component='p'>
                Office Cleaning @ Jalan Wan Kadir
              </Typography>
            </CardContent>
          </Card>
          <Card style={{ marginTop: '8px' }}>
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
          <Card style={{ marginTop: '8px' }}>
            <CardContent>
              <Typography variant='body2' color='textSecondary' component='p'>
                Office Cleaning @ Jalan Wan Kadir
              </Typography>
            </CardContent>
          </Card>
          <Card style={{ marginTop: '8px' }}>
            <CardContent>
              <Typography variant='body2' color='textSecondary' component='p'>
                Office Cleaning @ Jalan Wan Kadir
              </Typography>
            </CardContent>
          </Card>
          <Card style={{ marginTop: '8px' }}>
            <CardContent>
              <Typography variant='body2' color='textSecondary' component='p'>
                Office Cleaning @ Jalan Wan Kadir
              </Typography>
            </CardContent>
          </Card>
          <Card style={{ marginTop: '8px' }}>
            <CardContent>
              <Typography variant='body2' color='textSecondary' component='p'>
                Office Cleaning @ Jalan Wan Kadir
              </Typography>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  )
}
