import React, { useState } from 'react'
import Modal from 'react-modal'

function NewModal() {
    const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <div>
        <button onClick={() => setModalIsOpen(true)}>Open</button>
        <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} shouldCloseOnOverlayClick={false}>
            <p>This is a modal</p>
            <button onClick={() => setModalIsOpen(false)}>Close</button>
        </Modal>
    </div>
  )
}

export default NewModal