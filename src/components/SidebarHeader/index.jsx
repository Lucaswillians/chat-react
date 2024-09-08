import * as C from "./styles";
import { MdDonutLarge, MdChat, MdMoreVert } from "react-icons/md";
import * as EmailValidator from "email-validator";
import { auth, db } from "../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";

export default function SidebarHeader({ setUserChat }) {
  const [user] = useAuthState(auth)
  const refChat = db.collection('chats').where('users', 'array-contains', user.email)
  const [chatsSnapshot] = useCollection(refChat)

  const chatExists = ({ emailChat }) => {
    return !!chatsSnapshot?.docs.find((chat) => chat.data().user.find((user) => user === emailChat)?.length > 0)
  }

  const handleCreateChat = () => {
    const emailInput = prompt('Escreva o email desejado')

    if (!emailInput) return

    if (!EmailValidator.validate(emailInput)) alert('Email invalido!')
    
    if (emailInput === user.email) alert('Insira um email diferente do seu!')

    if (chatExists(emailInput)) alert('chat ja existente!')

    db.collection('chats').add({
      users: [user.email, emailInput]
    })
  }

  return (
    <C.Container>
      <C.Avatar src={user?.photoURL} onClick={() => [auth.signOut(), setUserChat(null)]} />
      <C.Options>
        <MdDonutLarge/>
        <MdChat onClick={handleCreateChat}/>
        <MdMoreVert/>
      </C.Options>
    </C.Container>
  )
}