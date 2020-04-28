import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import { object, string, number, date } from 'yup';
import useStyles from './ProjectFormDialogStyle';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { addProject } from '../../actions/projects';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

const ProjectSchema = object().shape({
  title: string().required('project title is required!'),
  description: string()
    .min(20, 'Description needs to be at least 20 characters!')
    .required('Description is required!'),
  budget: number().typeError('you must specify a number'),
  deadLine: date().typeError('Deadline for the project is required'),
});

const ProjectFormDialog = ({ addProject }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const { handleSubmit, register, errors } = useForm({
    validationSchema: ProjectSchema,
    mode: 'onBlur',
  });
  const onSubmit = (data) => {
    addProject({
      ...data,
      id: Math.random(),
      state: 'in-progress',
      createdAt: Date.now(),
    });
    toast.success(`Project ${data.title} created successfully!`);
    handleClose();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box m={2} p={2}>
      <Fab
        className={classes.addBtn}
        color="primary"
        aria-label="add"
        onClick={handleClickOpen}
      >
        <AddIcon />
      </Fab>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add New Project</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <TextField
              id="title"
              name="title"
              label="Project Title"
              type="text"
              fullWidth
              margin="normal"
              error={!!errors.title}
              helperText={errors.title?.message}
              inputRef={register}
            />
            <TextField
              id="description"
              name="description"
              label="Project description"
              multiline
              rows="4"
              fullWidth
              margin="normal"
              error={!!errors.description}
              helperText={errors.description?.message}
              inputRef={register}
            />
            <TextField
              id="budget"
              name="budget"
              label="Project budget"
              type="number"
              fullWidth
              margin="normal"
              error={!!errors.budget}
              helperText={errors.budget?.message}
              inputRef={register}
            />
            <TextField
              id="deadLine"
              name="deadLine"
              label="DeadLine"
              type="date"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              margin="normal"
              error={!!errors.deadLine}
              helperText={errors.deadLine?.message}
              inputRef={register}
            />

            <Button type="submit" color="primary" className={classes.submitBtn}>
              Add
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </Box>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addProject: (project) => dispatch(addProject(project)),
});

export default connect(null, mapDispatchToProps)(ProjectFormDialog);
