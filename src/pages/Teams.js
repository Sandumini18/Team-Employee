import React, { useState } from 'react'
import TeamCard from '../components/TeamCard'
import AddTeam from '../components/AddTeam';
import Modal from 'react-modal'


function Teams() {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
      }

  return (
    <div>
        <div>
            <h2>Teams</h2>
            <div>
               <button onClick={() => openModal()}>Add Team</button>
               <Modal isOpen={modalIsOpen} onRequestClose={closeModal} ariaHideApp={false}>
                <AddTeam onSubmit={handleSubmit}/>
               </Modal>
            </div>
            
            <div>
                <TeamCard teamName="Team Alpha" teamLead="Brian" memberCount={5}/>
                <TeamCard teamName="Team Beta" teamLead="James" memberCount={8}/>
            </div>
        </div>
        </div>
  )
}

export default Teams