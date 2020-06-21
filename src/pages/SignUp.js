import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { string, object, date } from 'yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import moment from 'moment';

import { makeStyles } from '@material-ui/core/styles';

import { signUp } from '../actions/authentication';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',

    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

const schema = object().shape({
  name: string()
    .min(3, 'Organization name needs to be at least 3 characters!')
    .required('Organization name is required!'),
  firstName: string().required('First Name is required!'),
  lastName: string().required('Last Name is required!'),
  phoneNumber: string().matches(
    /^(01)(0|2|1|5)[0-9]{8}$/,
    'Inavalid phone number!'
  ),
  dateOfBirth: date()
    .required('Birthdate is required!')
    .min(new Date(1900, 0, 1))
    .max(moment().subtract(10, 'y').toDate(), 'Needs to be at least 10 years'),
  email: string()
    .lowercase()
    .email('Invalid email address!')
    .required('Email is required!'),
  password: string()
    .min(6, 'Password needs to be at least 6 characters!')
    .required('Password is required!'),
});

const SignUp = ({ history, onSignUp }) => {
  const classes = useStyles();

  const { register, handleSubmit, errors, formState } = useForm({
    validationSchema: schema,
    mode: 'onBlur',
  });

  const onSubmit = async (data) => {
    try {
      await onSignUp(data);
      toast.success(`Signed up Successfully & You're logged in now`);
      history.replace('/');
    } catch (err) {
      err.response.data.forEach(({ message }) => toast.error(message));
    }
  };

  return (
    <Container component='main' maxWidth='xs'>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <form
          className={classes.form}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name='name'
                variant='standard'
                fullWidth
                id='organizationName'
                label='Organization Name'
                error={!!errors.name}
                helperText={errors.name?.message}
                inputRef={register}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name='firstName'
                variant='standard'
                fullWidth
                id='firstName'
                label='First Name'
                error={!!errors.firstName}
                helperText={errors.firstName?.message}
                inputRef={register}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant='standard'
                fullWidth
                id='lastName'
                label='Last Name'
                name='lastName'
                error={!!errors.lastName}
                helperText={errors.lastName?.message}
                inputRef={register}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                name='phoneNumber'
                variant='standard'
                fullWidth
                id='phoneNumber'
                label='Phone Number'
                error={!!errors.phoneNumber}
                helperText={errors.phoneNumber?.message}
                inputRef={register}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                defaultValue={moment().subtract(10, 'y').format('YYYY-MM-DD')}
                name='dateOfBirth'
                variant='standard'
                fullWidth
                id='dateOfBirth'
                label='Birthday'
                type='date'
                InputLabelProps={{
                  shrink: true,
                }}
                error={!!errors.dateOfBirth}
                helperText={errors.dateOfBirth?.message}
                inputRef={register}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant='standard'
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                error={!!errors.email}
                helperText={errors.email?.message}
                inputRef={register}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='standard'
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                error={!!errors.password}
                helperText={errors.password?.message}
                inputRef={register}
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            disabled={formState.isSubmitting}
          >
            Sign Up
          </Button>
          <Grid container justify='flex-end'>
            <Grid item>
              <Link to='/sign-in' className={classes.link}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onSignUp: (data) => dispatch(signUp(data)),
});

export default connect(null, mapDispatchToProps)(SignUp);
