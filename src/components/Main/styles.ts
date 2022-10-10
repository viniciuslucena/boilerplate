import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: #06092b;
  color: #fff;
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 3rem;
`

export const Logo = styled.h1`
  font-size: 36px;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;

  svg {
    margin-right: 2rem;
  }
`

export const Title = styled.h2`
  font-size: 28px;
`

export const Description = styled.p`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 2rem;
`

export const Illustration = styled.img`
  width: min(30rem, 100%);
`
