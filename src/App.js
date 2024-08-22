import { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from './services/firebase'
import Loading from './components/Loading'
import Login from './components/Login'

export default function App () {
  const [user, loading] = useAuthState(auth)

  useEffect(() => {
    if (user) {
      db.collection("users").doc(user.uid).set({
        email: user.email,
        photoURL: user.photoURL
      })
    }
  }, [user])

  if (loading) return <Loading/>

  if (!user) return <Login/>

  return (
    <div>App</div>
  )
}