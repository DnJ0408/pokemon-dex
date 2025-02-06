import './App.css'
import Router from './shared/Router'
import { ToastContainer, Bounce } from 'react-toastify'
import GlobalStyle from './styles/GlobalStyle'

function App() {

  return (
    <>
      <Router />
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <GlobalStyle />
    </>
  )
}

export default App
