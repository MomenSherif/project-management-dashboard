import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { useForm } from 'react-hook-form';
import { string, object, date, number } from 'yup';
import { toast } from 'react-toastify';
import moment from 'moment';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';

import useStyles from './EmployeeFormDialogStyle';

const schema = object().shape({
  firstName: string()
    .required('Employee first name is required!')
    .min(3, 'First name needs to be at least 3 characters!'),
  lastName: string()
    .required('Employee last name is required!')
    .min(3, 'Last name needs to be at least 3 characters!'),
  phoneNumber: string().matches(
    /^(01)(0|2|1|5)[0-9]{8}$/,
    'Inavalid phone number!'
  ),
  dateOfBirth: date()
    .required('Birthdate is required!')
    .min(new Date(1900, 0, 1))
    .max(moment().subtract(18, 'y').toDate(), 'Needs to be at least 18 years'),
  email: string()
    .lowercase()
    .email('Invalid email address!')
    .required('Email is required!'),
  salary: number().moreThan(2000, 'Minimum salary is 2000'),
  role: string().required('Role is required!'),
  team: string().required('Team is required!'),
});

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

const EmployeeFormDialog = ({ addTeam, teams }) => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = dropdownOpen && options.length === 0;

  useEffect(() => {
    let active = true;
    if (!loading) {
      return undefined;
    }
    (async () => {
      // request teams here
      if (active) {
        await sleep(500); // 2al y3ni beyconnect 3al database
        setOptions(teams);
      }
    })();
    return () => {
      active = false;
    };
  }, [loading]);

  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema,
    mode: 'onBlur',
  });

  const onSubmit = async (data) => {
    toast.success(`Please, assume an employee is added!`);
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <Fragment>
      <Fab
        color="primary"
        aria-label="add"
        onClick={handleClickOpen}
        className={classes.addBtn}
      >
        <AddIcon />
      </Fab>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="Add new employee"
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle id="form-dialog-title">Add New Employee</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoFocus
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  type="text"
                  fullWidth
                  margin="normal"
                  error={!!errors.firstName}
                  helperText={errors.firstName?.message}
                  inputRef={register}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  type="text"
                  fullWidth
                  margin="normal"
                  error={!!errors.lastName}
                  helperText={errors.lastName?.message}
                  inputRef={register}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="phoneNumber"
                  variant="standard"
                  fullWidth
                  id="phoneNumber"
                  label="Phone Number"
                  error={!!errors.phoneNumber}
                  helperText={errors.phoneNumber?.message}
                  inputRef={register}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  defaultValue={moment().subtract(10, 'y').format('YYYY-MM-DD')}
                  name="dateOfBirth"
                  variant="standard"
                  fullWidth
                  id="dateOfBirth"
                  label="Birthday"
                  type="date"
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
                  variant="standard"
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  inputRef={register}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  type="number"
                  fullWidth
                  id="salary"
                  label="Salary"
                  name="salary"
                  error={!!errors.salary}
                  helperText={errors.salary?.message}
                  inputRef={register}
                />
              </Grid>
              <Grid item xs={12}>
                <Autocomplete
                  className={classes.autocomplete}
                  open={dropdownOpen}
                  onOpen={() => {
                    setDropdownOpen(true);
                  }}
                  onClose={() => {
                    setDropdownOpen(false);
                  }}
                  getOptionSelected={(option, value) =>
                    option.name === value.name
                  }
                  getOptionLabel={(option) => option.name}
                  options={options}
                  loading={loading}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      id="team"
                      name="team"
                      label="Team"
                      error={!!errors.team}
                      helperText={errors.team?.message}
                      inputRef={register}
                      variant="outlined"
                      InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                          <React.Fragment>
                            {loading ? (
                              <CircularProgress color="inherit" size={20} />
                            ) : null}
                            {params.InputProps.endAdornment}
                          </React.Fragment>
                        ),
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  fullWidth
                  id="role"
                  label="Role"
                  name="role"
                  error={!!errors.role}
                  helperText={errors.role?.message}
                  inputRef={register}
                />
              </Grid>
            </Grid>

            <Button type="submit" color="primary" className={classes.submitBtn}>
              Add
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  // addTeam: (team) => dispatch(addTeam(team)),
});

const mapStateToProps = (state) => ({
  teams: state.teams,
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeFormDialog);
