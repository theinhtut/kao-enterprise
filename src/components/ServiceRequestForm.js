import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Button, TextField, Typography } from '@material-ui/core'
import formImg from '../images/form-submit.svg'
import '../styles/service-request-form.css'

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
    <section>
      <Typography variant='h4'>Service Request Form</Typography>
      <div className={classes.root}>
        <div className='request-form__input-wrapper'>
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
          <Button
            className='request-form__btn'
            onClick={() => alert('You have successfully submitted the request')}
            variant='contained'
            color='primary'
          >
            <Link to={'/dashboard'} style={{color: 'white', textDecoration:'none'}}>
              Submit Request
            </Link>
          </Button>
        </div>
        <div className='request-form'>
          <img className='request-form__img' src={formImg} alt='' />
        </div>
      </div>
    </section>
  )
}

// export default class ServiceRequestForm extends Component {
//   render() {
//       const classes = useStyles()
//     return (
//       <div className={classes.root}>
//         <div>
//           <TextField
//             id='filled-full-width'
//             label='Unit Number'
//             style={{ margin: 8 }}
//             fullWidth
//             margin='normal'
//             variant='filled'
//           />
//           <TextField
//             id='filled-full-width'
//             label='Owner Name'
//             style={{ margin: 8 }}
//             fullWidth
//             margin='normal'
//             variant='filled'
//           />
//           <TextField
//             id='filled-full-width'
//             label='Contact Number'
//             style={{ margin: 8 }}
//             fullWidth
//             margin='normal'
//             variant='filled'
//           />
//           <TextField
//             id='filled-full-width'
//             label='Additonal Notes'
//             style={{ margin: 8 }}
//             fullWidth
//             margin='normal'
//             variant='filled'
//             helperText='Maximum 300 charaters'
//           />
//           <Button variant='contained' color='primary'>Submit Request</Button>
//         </div>
//       </div>
//     )
//   }
// }
