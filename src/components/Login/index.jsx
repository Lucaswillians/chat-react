import { auth, provider } from "../../services/firebase.js"
import * as C from "./styles.js"

export default function Login () {
  const handleSignin = () => {
    auth.signInWithPopup(provider).catch(alert)
  }

  return (
    <C.Container>
      <C.Button onClick={handleSignin}>Login com o google</C.Button>
    </C.Container>
  )
}
