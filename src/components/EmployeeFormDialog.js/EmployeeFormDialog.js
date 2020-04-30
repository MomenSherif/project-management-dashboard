import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { useForm } from 'react-hook-form';
import { string, object } from 'yup';
import { toast } from 'react-toastify';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';

import useStyles from './EmployeeFormDialogStyle';

const schema = object().shape({
  name: string()
    .min(5, 'Name needs to be at least 5 characters!')
    .required('Employee name is required!'),
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
            <TextField
              autoFocus
              id="name"
              name="name"
              label="Name"
              type="text"
              fullWidth
              margin="normal"
              error={!!errors.name}
              helperText={errors.name?.message}
              inputRef={register}
            />

            <Autocomplete
              className={classes.autocomplete}
              open={dropdownOpen}
              onOpen={() => {
                setDropdownOpen(true);
              }}
              onClose={() => {
                setDropdownOpen(false);
              }}
              getOptionSelected={(option, value) => option.name === value.name}
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
