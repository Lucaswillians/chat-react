import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../services/firebase";
import * as C from "./styles";
import { MdPerson } from "react-icons/md";

const getUser = (users, userLogged) => users?.filter((user) => user !== userLogged?.email)[0]

export default function SidebarChatsItem({ id, users, user, setUserChat, active }) {
  const userItem = getUser(users, user);

  const [getUserItem] = useCollection(
    userItem ? db.collection('users').where('email', '==', userItem) : null
  );

  const Avatar = getUserItem?.docs?.[0]?.data();

  const handleNewChat = () => {
    if (!userItem) return; 

    const userChat = {
      chatId: id,
      name: userItem.split('@')[0],
      photoURL: Avatar?.photoURL,
    }
    setUserChat(userChat);
  }

  return (
    <C.Container onClick={handleNewChat} className={active}>
      {Avatar ? <C.Avatar src={Avatar?.photoURL} /> : <MdPerson />}
      <C.Name>{userItem?.split("@")[0] || "Usuário desconhecido"}</C.Name>
    </C.Container>
  )
}
