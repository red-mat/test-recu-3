import '@/css/App.css'
import { Link, Route, Routes } from 'react-router-dom'

function Home(): JSX.Element {
  return (
    <main>
      <h1>Home</h1>
      <Link to="/login">login</Link>
    </main>
  )
}

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<h1>login</h1>} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  )
}

export default App
