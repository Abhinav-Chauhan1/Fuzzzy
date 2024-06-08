import { useAuthContext } from './context/AuthContext'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Signup from './pages/SignUp'
import Home from './pages/home'
import { Toaster } from 'react-hot-toast'
import { Routes, Route , Navigate } from 'react-router-dom'

function App() {

  const {authUser} = useAuthContext()

  return (
    <>
    <Routes>
      <Route path="/" element={authUser ? <Home /> : <Navigate to={'/login'} />} />
      <Route path="/signup" element={authUser ? <Navigate to='/' /> : <Signup />} />
      <Route path="/login" element={authUser ? <Navigate to='/' /> :<Login />} />
      <Route path="/profile" element={authUser ? <Profile /> : <Navigate to={'/login'}/>} />
    </Routes>
    <Toaster />
    </>
  )
}

export default App
