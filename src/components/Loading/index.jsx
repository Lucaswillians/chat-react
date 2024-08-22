import { ColorRing } from 'react-loader-spinner';

import * as C from './styles.js'

export default function Loading () {
  return (
    <C.Container>
      <ColorRing
        visible={true}
        height={100}
        width={100}
        ariaLabel={'Ícone de carregamento de página'}/>
    </C.Container>
  )
}
