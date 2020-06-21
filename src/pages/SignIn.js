import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import LockOpenIcon from '@material-ui/icons/LockOpen';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { string, object } from 'yup';

import { login } from '../actions/authentication';
import { makeStyles } from '@material-ui/core/styles';

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
  email: string()
    .lowercase()
    .email('Invalid email address!')
    .required('Email is required!'),
  password: string()
    .min(6, 'Password needs to be at least 6 characters!')
    .required('Password is required!'),
});

const SignIn = ({ history, onLogin }) => {
  const classes = useStyles();

  const { register, handleSubmit, errors, formState } = useForm({
    validationSchema: schema,
    mode: 'onBlur',
  });

  const onSubmit = async (data) => {
    try {
      await onLogin(data);
      toast.success(`Welcome`);
      history.replace('/dashboard');
    } catch (e) {
      toast.error('Invalid Email or Password!');
    }
  };

  return (
    <Container component='main' maxWidth='xs'>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOpenIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <form
          className={classes.form}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <Grid container spacing={2}>
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
            Sign In
          </Button>
          <Grid container justify='flex-end'>
            <Grid item>
              <Link to='/sign-up' className={classes.link}>
                Don't have an account? Sign up
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onLogin: ({ email, password }) => dispatch(login(email, password)),
});

export default connect(null, mapDispatchToProps)(SignIn);
