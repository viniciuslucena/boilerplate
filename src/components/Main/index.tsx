import * as S from './styles'
import { FaReact } from 'react-icons/fa'

const Main = () => {
  return (
    <S.Wrapper>
      <S.Logo>
        <FaReact />
        Vinícius Lucena
      </S.Logo>
      <S.Title>Boilerplate</S.Title>
      <S.Description>
        Boilerplate utilizando TypeScript, ReactJS, NextJS, styled-components e
        Jest
      </S.Description>
      <S.Illustration src="/img/illustration.svg" alt="Developer" />
    </S.Wrapper>
  )
}

export default Main
