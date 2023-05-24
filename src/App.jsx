// routes
import { RoutesMain } from './routes'
// toastfy
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { UserProvider } from './contexts/UserContext'

export const App = () => {
  return (
    <UserProvider>
      <RoutesMain />
      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
    </UserProvider>
  )
}
