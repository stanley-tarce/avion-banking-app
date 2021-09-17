import { Dialog, DialogContentText, DialogActions, Button } from '@material-ui/core'
import React from 'react'


function ModalErrorHandling(props) {
  let { open, setOpen,message } = props
  return (
    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContentText id="alert-dialog-description">
      {message}
      </DialogContentText>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>Return</Button>
      </DialogActions>
    </Dialog>
  )
}

export default ModalErrorHandling
