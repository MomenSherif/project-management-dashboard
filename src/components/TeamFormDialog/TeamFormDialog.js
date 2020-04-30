import React, { Fragment, useState } from 'react';
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
import EditIcon from '@material-ui/icons/Edit';

import useStyles from './TeamFormDialogStyle';
import { isEmailExists } from '../../api/helper';
import { addTeam, updateTeam } from '../../actions/teams';

const schema = object().shape({
  name: string()
    .min(5, 'Name needs to be at least 5 characters!')
    .required('Team name is required!'),
  description: string().min(
    10,
    'Description needs to be at least 10 characters!'
  ),
  leader: string()
    .lowercase()
    .email('Invalid email address')
    .required('Team leader email is required!')
});

const TeamFormDialog = ({ addTeam, editMode, editedTeam, updateTeam }) => {
  // console.log('EDIT => ', editedTeam, 'editMode => ', editMode);

  const [open, setOpen] = useState(false);
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema,
    mode: 'onBlur'
  });

  const onSubmit = async data => {
    const isValid = await isEmailExists(data.leader);
    if (!isValid) return toast.error('Email not exist!');

    if (!editMode) {
      // TODO: Don't forget to update when using async actions
      addTeam({ id: Math.random(), ...data, createdAt: Date.now() });
      toast.success(`Team ${data.name} created successfully!`);
    } else {
      updateTeam(editedTeam.id, { ...data });
      toast.success(`Team ${data.name} updated successfully!`);
    }
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
        color={editMode ? 'secondary' : 'primary'}
        aria-label={editMode ? 'edit' : 'add'}
        onClick={handleClickOpen}
        className={classes.addBtn}
      >
        {editMode ? <EditIcon /> : <AddIcon />}
      </Fab>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby={editMode ? 'Edit Team' : 'Add new team'}
        fullWidth
        maxWidth='sm'
      >
        <DialogTitle id='form-dialog-title'>
          {editMode ? 'Edit Your Team Info' : 'Add New Team'}
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <TextField
              autoFocus
              id='name'
              name='name'
              label='Name'
              type='text'
              fullWidth
              margin='normal'
              defaultValue={editMode ? editedTeam.name : ''}
              error={!!errors.name}
              helperText={errors.name?.message}
              inputRef={register}
            />
            <TextField
              id='description'
              name='description'
              label='Description'
              multiline
              rows='4'
              defaultValue={editMode ? editedTeam.description : ''}
              fullWidth
              error={!!errors.description}
              helperText={errors.description?.message}
              inputRef={register}
            />

            <TextField
              id='email'
              name='leader'
              label='Leader Email'
              type='email'
              fullWidth
              margin='normal'
              defaultValue={editMode ? editedTeam.leader.email : ''}
              error={!!errors.leader}
              helperText={errors.leader?.message}
              inputRef={register}
            />
            <Button type='submit' color='primary' className={classes.submitBtn}>
              {editMode ? 'Edit' : 'Add'}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

const mapDispatchToProps = dispatch => ({
  addTeam: team => dispatch(addTeam(team)),
  updateTeam: (id, team) => dispatch(updateTeam(id, team))
});

export default connect(null, mapDispatchToProps)(TeamFormDialog);
