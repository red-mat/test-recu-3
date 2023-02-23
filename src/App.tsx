import '@/css/App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/">
        <h1>home</h1>
      </Route>
      <Route path="/login">
        <h1>login</h1>
      </Route>
      <Route path="*">
        <h1>404</h1>
      </Route>
    </Routes>
  )
}

export default App
