import * as C from "./styles";
import { MdPerson, MdMoreVert, MdSearch } from "react-icons/md";

export default function ChatHeader ({ photoURL, name }) {
  return (
    <C.Container>
      <C.UserInfo>
        {photoURL ? <C.Avatar src={photoURL} alt="Avatar" /> : <MdPerson />}
        <C.NameContent>
          <C.Name>{name}</C.Name>
        </C.NameContent>
      </C.UserInfo>
      <C.Options>
        <MdSearch />
        <MdMoreVert />
      </C.Options>
    </C.Container>
  )
}