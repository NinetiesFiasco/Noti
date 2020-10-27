import styled from 'styled-components'

const clavishaWidth = 20;

export const Container = styled.div`
  padding: 10px;
  width: 200px;
  height: 75px;
  position: relative;
`

const ClavishaParent = styled.div`
  position: absolute;
  top: 0px;
  outline: 1px solid black;
`

export const ClavishaEl = styled(ClavishaParent)`
  left: ${props=>props.num*clavishaWidth}px;
  background: white;
  height: 60px;
  width: ${clavishaWidth}px;
  z-index: 200;
`

export const BlackClavishaEl = styled(ClavishaParent)`
  left: ${props=> props.num * clavishaWidth + clavishaWidth-(clavishaWidth/4)}px;
  background: black;
  height: 35px;
  width: ${clavishaWidth/2}px;
  z-index: 300;
`

const SelectedParent = styled.div`
  background: yellow;
  width: 80%;
  position: absolute;
  bottom: 2px;
`
export const Selected = styled(SelectedParent)`
  height: ${clavishaWidth-4}px;
  border-radius: ${(clavishaWidth-4)/2}px;
  left: 2px;
`
export const SelectedBlack = styled(SelectedParent)`
  height: ${clavishaWidth/2-2}px;
  border-radius: ${(clavishaWidth)/2}px;
  left: 1px;
  background: yellow; /* ЗАГЛУШКА */
`


//////////////////////////////
