import styled from 'styled-components'

const StanSize = 10;

export const Line = styled.div`
  border-bottom: 1px solid black;
  margin: 10px;
`

export const DopLine = styled(Line)`
  margin: ${StanSize}px 50% ${StanSize}px 30%;
`

export const Key = styled.img`
  position: absolute;
  width: 20px;
  left: 15px;
  top: -5px;
`

export const Nota = styled.div`
  position: absolute;
  left: 35%;
  top: ${props=>props.fromTop}px;
  background: black;
  width: 16px;
  height: 8px;
  border-radius: 10px/5px;
  color: pink;
`

export const Bemol = styled.div`
  position: absolute;
  font-style: italic;
  color: black;
  left: -10px;
  top: -5px;
`

export const Diez = styled.div`

`