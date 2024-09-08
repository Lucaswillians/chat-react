import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from './services/firebase'
import * as C from "./styles/app.js"

import Loading from './components/Loading/index.jsx'
import Login from './components/Login/index.jsx'
import Sidebar from './components/Sidebar/index.jsx'
import Chat from './components/Chat/index.jsx'

export default function App () {
  const [user, loading] = useAuthState(auth)
  const [userChat, setUserChat] = useState(null)

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
    <C.Container>
      <Sidebar setUserChat={setUserChat} userChat={userChat} />
      <Chat userChat={userChat} />
    </C.Container>
  )
}
