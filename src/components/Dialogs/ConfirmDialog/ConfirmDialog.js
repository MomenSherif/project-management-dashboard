import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';

const ConfirmDialog = ({ children, title, content, onConfirm, btnStyle }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const onSubmit = () => {
    handleClick();
    onConfirm();
  };

  return (
    <div>
      <Tooltip title={title} placement='left'>
        <Fab color='primary' onClick={handleClick} className={btnStyle}>
          {children}
        </Fab>
      </Tooltip>
      <Dialog open={open} onClose={handleClick} fullWidth>
        <DialogTitle id='alert-dialog-title'>{title}</DialogTitle>
        <DialogContent>{content}</DialogContent>
        <DialogActions>
          <Button onClick={onSubmit} color='primary' autoFocus>
            Yes
          </Button>
          <Button onClick={handleClick} color='primary'>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ConfirmDialog;
