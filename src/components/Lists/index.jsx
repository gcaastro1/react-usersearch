// style
import { ListContainer, ListContent } from './styles'
// icon
import { FaPlus } from 'react-icons/fa'
// components
import { Button } from '../Buttons/styles'
import { Card } from './Cards'
// react
import { useContext } from 'react'
// context
import { TechContext } from '../../contexts/TechContext'
import { useEffect } from 'react'

export const List = () => {
  const { modalIsOpen, setIsOpen, setModalType, setCurrTech, techs } =
    useContext(TechContext)
  
  return (
    <ListContainer>
      <div className='listHeader'>
        <h1>Tecnologias</h1>
        <Button
          btnType='grayIcon'
          onClick={() => {
            setIsOpen(!modalIsOpen)
            setModalType('createTech')
          }}
        >
          <FaPlus />
        </Button>
      </div>
      <ListContent>
        <ul>
          {techs.length > 0 ? (
            techs.map((tech, index) => (
              <Card
                key={index}
                title={tech.title}
                status={tech.status}
                event={() => {
                  setIsOpen(!modalIsOpen)
                  setModalType('updateTech')
                  console.log(techs)
                  setCurrTech(tech)
                }}
              />
            ))
          ) : (
            <></>
          )}
        </ul>
      </ListContent>
    </ListContainer>
  )
}
