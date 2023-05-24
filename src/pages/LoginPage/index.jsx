// styles
import { LoginContainer } from './styles'
import { PageContainer } from '../../styles/global'
// logo
import Logo from '../../assets/Logo.svg'
// router-dom
import { Link as Route } from 'react-router-dom'
// components
import { LoginForm } from '../../components/Forms/LoginForm'

export const Login = () => {
  return (
    <PageContainer>
      <div className='formContainer'>
        <img src={Logo} alt='Logo' />
        <LoginContainer>
          <h1>Login</h1>
          <LoginForm />
          <span>Ainda não possui uma conta?</span>
          <Route to='/register'>Cadastrar</Route>
        </LoginContainer>
      </div>
    </PageContainer>
  )
}
