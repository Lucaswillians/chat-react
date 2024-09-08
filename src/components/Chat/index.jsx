import ChatHeader from "../ChatHeader";
import * as C from "./styles";
import Default from "./../Default";
import ChatBody from "../ChatBody";
import ChatFooter from "../ChatFooter";

export default function Chat ({ userChat }) {
  if (!userChat) return <Default/>

  return (
    <C.Container>
      <ChatHeader photoURL={userChat?.photoURL} name={userChat?.name}/>
      <ChatBody chatId={userChat?.chatId} />
      <ChatFooter chatId={userChat?.chatId}/>
    </C.Container>
  )
}