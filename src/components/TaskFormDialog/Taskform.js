import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from '../../api/axios';

import { useForm, Controller } from 'react-hook-form';
import { string, object, date } from 'yup';
import { toast } from 'react-toastify';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import PostAddIcon from '@material-ui/icons/PostAdd';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import useStyles from './TaskFormStyle';
import { assignTask } from '../../actions/tasks';

const schema = object().shape({
  title: string().required('Task title is required!'),
  description: string().min(
    20,
    'Description needs to be at least 20 characters!'
  ),
  deadLine: date().required('Task deadline is required').min(new Date()),
  projectId: string().required('Project is required'),
  employeeId: string().required('Employee is required'),
});

const TaskForm = ({ team, assignTask }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { register, handleSubmit, errors, control } = useForm({
    validationSchema: schema,
    mode: 'onBlur',
  });
  const onSubmit = async (submitedData) => {
    setOpen(false);
    axios
      .post(`${process.env.REACT_APP_BACKEND_BASE_URL}/tasks`, submitedData)
      .then(({ data }) => {
        assignTask(data);
        toast.success(`Task is assigned successfully!`);
      })
      .catch((err) => toast.error(err.response.data.message));
  };
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <Tooltip title='Assign Task to member' placement='left'>
        <Fab
          color='primary'
          onClick={handleClick}
          className={classes.assignBtn}
        >
          <PostAddIcon />
        </Fab>
      </Tooltip>
      <Dialog open={open} onClose={handleClick} fullWidth maxWidth='sm'>
        <DialogTitle id='form-dialog-title'>Assign Task To Member</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <TextField
              autoFocus
              id='title'
              name='title'
              label='Task Title'
              type='text'
              fullWidth
              margin='normal'
              error={!!errors.title}
              helperText={errors.title?.message}
              inputRef={register}
            />
            <TextField
              id='description'
              name='description'
              label='Task Description'
              multiline
              rows='4'
              fullWidth
              error={!!errors.description}
              helperText={errors.description?.message}
              inputRef={register}
            />
            <FormControl className={classes.formControl} fullWidth>
              <InputLabel id='demo-simple-select-label'>
                Choose a member
              </InputLabel>
              <Controller
                as={
                  <Select>
                    {team.employees?.map((emp) => (
                      <MenuItem key={emp._id} value={emp._id}>
                        {emp.firstName + ' ' + emp.lastName}
                      </MenuItem>
                    ))}
                  </Select>
                }
                name='employeeId'
                control={control}
                defaultValue=''
              />
            </FormControl>

            <FormControl className={classes.formControl} fullWidth>
              <InputLabel>Choose a project</InputLabel>
              <Controller
                as={
                  <Select>
                    {team.projects?.map((project) => (
                      <MenuItem key={project._id} value={project._id}>
                        {project.title}
                      </MenuItem>
                    ))}
                  </Select>
                }
                name='projectId'
                control={control}
                defaultValue=''
              />
            </FormControl>
            <TextField
              id='deadLine'
              name='deadLine'
              label='Task Deadline'
              type='date'
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

            <Button type='submit' color='primary' className={classes.submitBtn}>
              Assign
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

// const mapStateToProps = (state, ownProps) => ({
//   team: state.teams.find((team) => team.id === ownProps.teamId),
// });

const mapDispatchToProps = (dispatch) => ({
  assignTask: (task) => dispatch(assignTask(task)),
});

export default connect(null, mapDispatchToProps)(TaskForm);
