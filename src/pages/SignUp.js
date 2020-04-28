import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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
}));

const SignUp = () => {
  const classes = useStyles();

  return (
    <Container component='main' maxWidth='xs'>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name='name'
                variant='standard'
                fullWidth
                id='name'
                label='Organization Name'
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name='firstName'
                variant='standard'
                fullWidth
                id='firstName'
                label='First Name'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant='standard'
                fullWidth
                id='lastName'
                label='Last Name'
                name='lastName'
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                name='phoneNumber'
                variant='standard'
                fullWidth
                id='phoneNumber'
                label='Phone Number'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant='standard'
                fullWidth
                id='lastName'
                label='Last Name'
                name='lastName'
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant='standard'
                fullWidth
                id='email'
                label='Email Address'
                name='email'
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
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify='flex-end'>
            <Grid item>
              <Link href='#' variant='body2'>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default SignUp;
