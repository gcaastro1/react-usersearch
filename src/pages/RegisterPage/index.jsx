// styles
import { RegisterContainer, RegisterHeader } from './styles'
// logo
import Logo from '../../assets/Logo.svg'
// components
import { Link } from 'react-router-dom'
import { RegisterForm } from '../../components/Forms/RegisterForm'
import { PageContainer } from '../../styles/global'

export const Register = () => {
  return (
    <PageContainer>
      <div className='formContainer'>
        <RegisterHeader>
          <img src={Logo} alt='Logo' />
          <Link to='/'>Voltar</Link>
        </RegisterHeader>
        <RegisterContainer>
          <h1>Crie sua conta</h1>
          <span>Rapido e grátis, vamos nessa</span>
          <RegisterForm />
        </RegisterContainer>
      </div>
    </PageContainer>
  )
}
