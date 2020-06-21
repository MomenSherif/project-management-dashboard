import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { string, object } from 'yup';
import { toast } from 'react-toastify';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';

import { isEmailExists } from '../../../api/helper';

const schema = object().shape({
  email: string()
    .lowercase()
    .email('Invalid email address')
    .required('Team member email is required!'),
});

const EmailDialog = ({ children, title, content, onConfirm, btnStyle }) => {
  const [open, setOpen] = useState(false);
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema,
    mode: 'onBlur',
  });
  const handleClick = () => {
    setOpen(!open);
  };

  const onSubmit = async (data) => {
    handleClick();
    onConfirm(data.email);
  };
  return (
    <div>
      <Tooltip title={title} placement='left'>
        <Fab color='primary' onClick={handleClick} className={btnStyle}>
          {children}
        </Fab>
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleClick}
        aria-labelledby='form-dialog-title'
        fullWidth
        maxWidth='sm'
      >
        <DialogTitle id='form-dialog-title'>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{content}</DialogContentText>

          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              id='email'
              name='email'
              type='email'
              fullWidth
              margin='normal'
              error={!!errors.email}
              helperText={errors.email?.message}
              inputRef={register}
            />
            <Button type='submit' color='primary'>
              Done
            </Button>
            <Button onClick={handleClick} color='primary'>
              Cancel
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EmailDialog;
