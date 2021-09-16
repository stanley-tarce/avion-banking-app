import React from 'react'
import { Modal } from '@material-ui/core'
function ModalRegister(props) {
  const { open, handleClose } = props
  return (
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="simple-modal-title"
    aria-describedby="simple-modal-description"
  >
    {body}
  </Modal>

  )
}

export default ModalRegister
