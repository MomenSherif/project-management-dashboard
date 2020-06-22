import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { object, string, number, date } from 'yup';
import useStyles from './ProjectFormDialogStyle';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import {
  addProjectSuccess,
  updateProjectSuccess,
} from '../../actions/projects';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import moment from 'moment';

const ProjectSchema = object().shape({
  title: string().required('project title is required!'),
  description: string()
    .min(20, 'Description needs to be at least 20 characters!')
    .required('Description is required!'),
  budget: number().typeError('you must specify a number'),
  deadLine: date().typeError('Deadline for the project is required'),
});

const ProjectFormDialog = ({
  addProjectSuccess,
  isEdit,
  editingProject,
  updateProjectSuccess,
  handleProjectUpdate,
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [state, setState] = useState(editingProject?.state);

  const states = ['in-progress', 'in-review', 'done'];
  const newStates = states.filter((state) => state !== editingProject?.state);
  const { handleSubmit, register, errors } = useForm({
    validationSchema: ProjectSchema,
    mode: 'onBlur',
  });
  const onSubmit = (data) => {
    console.log(data, 'data');

    if (!isEdit) {
      addProjectSuccess({
        ...data,
      });
      toast.success(`Project ${data.title} created successfully!`);
    } else {
      updateProjectSuccess(editingProject._id, { ...data, state }).then(
        (res) => {
          handleProjectUpdate({ ...res.data, state });
          toast.success(`Project ${data.title} Updated successfully!`);
        }
      );
    }
    handleClose();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (event) => {
    setState(event.target.value);
  };
  return (
    <Box p={2}>
      <Fab
        className={classes.addBtn}
        color={isEdit ? 'secondary' : 'primary'}
        aria-label={isEdit ? 'edit' : 'add'}
        onClick={handleClickOpen}
      >
        {isEdit ? <EditIcon /> : <AddIcon />}
      </Fab>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>
          {isEdit ? 'Edit Project' : 'Add New Project'}
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <TextField
              id='title'
              name='title'
              label='Project Title'
              type='text'
              defaultValue={isEdit ? editingProject.title : ''}
              fullWidth
              margin='normal'
              error={!!errors.title}
              helperText={errors.title?.message}
              inputRef={register}
            />
            <TextField
              id='description'
              name='description'
              label='Project description'
              defaultValue={isEdit ? editingProject.description : ''}
              multiline
              rows='4'
              fullWidth
              margin='normal'
              error={!!errors.description}
              helperText={errors.description?.message}
              inputRef={register}
            />
            <TextField
              id='budget'
              name='budget'
              label='Project budget'
              defaultValue={isEdit ? editingProject.budget : ''}
              type='number'
              fullWidth
              margin='normal'
              error={!!errors.budget}
              helperText={errors.budget?.message}
              inputRef={register}
            />
            {isEdit ? (
              <>
                <InputLabel shrink htmlFor='state-project'>
                  State
                </InputLabel>
                <FormControl className={classes.formControl} fullWidth>
                  <Select
                    value={state}
                    onChange={handleChange}
                    inputProps={{
                      id: 'state-project',
                    }}
                    fullWidth
                  >
                    <MenuItem value={editingProject?.state}>
                      {editingProject?.state}
                    </MenuItem>
                    {newStates.map((stateName) => (
                      <MenuItem value={stateName} key={stateName}>
                        {stateName}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </>
            ) : (
              ''
            )}
            <TextField
              id='deadLine'
              name='deadLine'
              label='DeadLine'
              type='date'
              defaultValue={
                isEdit
                  ? moment(new Date(editingProject.deadLine)).format(
                      'YYYY-MM-DD'
                    )
                  : ''
              }
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              margin='normal'
              error={!!errors.deadLine}
              helperText={errors.deadLine?.message}
              inputRef={register}
            />

            <Button
              type='submit'
              color={isEdit ? 'secondary' : 'primary'}
              className={classes.submitBtn}
            >
              {isEdit ? 'Save' : 'Add'}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addProjectSuccess: (project) => dispatch(addProjectSuccess(project)),
  updateProjectSuccess: (id, project) =>
    dispatch(updateProjectSuccess(id, project)),
});

export default connect(null, mapDispatchToProps)(ProjectFormDialog);
