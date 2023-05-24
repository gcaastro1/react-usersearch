import { useContext } from 'react'
import Modal from 'styled-react-modal'
import { TechContext } from '../../contexts/TechContext'
import { Button } from '../Buttons/styles'
import { ModalBody, ModalHeader } from './styles'
import { RiCloseLine } from 'react-icons/ri'
import { TechForm } from '../Forms/TechForm'

export const ModalContainer = () => {
  const { modalIsOpen, setIsOpen, modalType } = useContext(TechContext)

  const modalToggle = () => {
    setIsOpen(!modalIsOpen)
  }

  const StyledModal = Modal.styled`
    width: 340px;
    max-width: 90%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.grayThree};
    border-radius: 4px;
  `

  return (
    <StyledModal
      isOpen={modalIsOpen}
      onEscapeKeydown={modalToggle}
      onBackgroundClick={modalToggle}
      role='dialog'
      aria-modal={true}
      aria-labelledby='modal-label'
    >
      <ModalHeader>
        { modalType === 'createTech' ? <h3>Cadastrar Tecnologia</h3> : <h3>Editar Tecnologia</h3>}
        <Button btnType='lightIcon' onClick={modalToggle}>
          <RiCloseLine />
        </Button>
      </ModalHeader>
      <ModalBody>
        <TechForm />
      </ModalBody>
    </StyledModal>
  )
}
