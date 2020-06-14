import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';

import { useForm, Controller } from 'react-hook-form';
import { string, object, date } from 'yup';
import { toast } from 'react-toastify';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
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
  deadLine: date().typeError('Task deadline is required')
});

const TaskForm = ({ team, assignTask }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { register, handleSubmit, errors, control } = useForm({
    validationSchema: schema,
    mode: 'onBlur'
  });
  const onSubmit = async data => {
    assignTask({
      id: Math.random(),
      ...data,
      state: 'in-progress',
      createdAt: Date.now()
    });

    setOpen(false);
  };
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Fragment>
      <Fab color='primary' onClick={handleClick} className={classes.assignBtn}>
        <PostAddIcon />
      </Fab>
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
              rows='2'
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
                    {team.employees.map(emp => (
                      <MenuItem key={emp.id} value={emp.id}>
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
              <InputLabel id='demo-simple-select-label'>
                Choose a project
              </InputLabel>
              <Controller
                as={
                  <Select>
                    {team.projects.map(project => (
                      <MenuItem key={project.id} value={project.id}>
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
              id='deadline'
              name='deadline'
              label='Task Deadline'
              type='date'
              className={classes.textField}
              InputLabelProps={{
                shrink: true
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
    </Fragment>
  );
};

const mapStateToProps = (state, ownProps) => ({
  team: state.teams.filter(team => team.id === ownProps.teamId)[0]
});
const mapDispatchToProps = dispatch => ({
  assignTask: task => dispatch(assignTask(task))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
