import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './redux/config/configStore.js'

createRoot(document.getElementById('root')).render(

  //* <App> 컴포넌트 이하의 자식 컴포넌트 들은 configStore.js에 있는 state를 자유롭게 쓸 수 있다.
  //* Provider의 속성으로는 store를 넣어준다. -> store={import한 저장소 이름}
  <Provider store={store}>
    <App />
  </Provider>
)
