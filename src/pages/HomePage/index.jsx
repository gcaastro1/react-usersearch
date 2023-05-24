// react
import { useContext } from 'react'
// router-dom
import { Link } from 'react-router-dom'
// logo
import Logo from '../../assets/Logo.svg'
// styles
import { Navbar, Header } from './styles'
// components
import { List } from '../../components/Lists'
// context
import { UserContext } from '../../contexts/UserContext'
import { TechProvider } from '../../contexts/TechContext'
import { ModalProvider } from 'styled-react-modal'
import { ModalContainer } from '../../components/Modal'

export const Home = () => {
  const { user, setUser } = useContext(UserContext)

  return (
    <TechProvider>
      <ModalProvider>
        <Navbar>
          <div className='container'>
            <img src={Logo} alt='Logo' />
            <Link
              to='/'
              onClick={() => {
                localStorage.clear()
                setUser(null)
              }}
            >
              Sair
            </Link>
          </div>
        </Navbar>
        <ModalContainer />
        <Header>
          <div className='container'>
            <h1>Olá, {user.name}</h1>
            <p>{user.course_module}</p>
          </div>
        </Header>
        <div className='container'>
          <List />
        </div>
      </ModalProvider>
    </TechProvider>
  )
}
