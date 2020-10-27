import React from 'react'
import styled from 'styled-components'

const clavishaWidth = 20;

const positions = [
  {name:"do",pos:1},
  {name:"re",pos:2},
  {name:"mi",pos:3},
  {name:"fa",pos:4},
  {name:"sol",pos:5},
  {name:"la",pos:6},
  {name:"si",pos:7}
]

const Container = styled.div`
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

const ClavishaEl = styled(ClavishaParent)`
  left: ${props=>props.num*clavishaWidth}px;
  background: white;
  height: 60px;
  width: ${clavishaWidth}px;
`

const BlackClavishaEl = styled(ClavishaParent)`
  left: ${props=> props.num * clavishaWidth + clavishaWidth-(clavishaWidth/4)}px;
  background: black;
  height: 35px;
  width: ${clavishaWidth/2}px;
`

const SelectedParent = styled.div`
  background: yellow;
  width: 80%;
  position: absolute;
  bottom: 2px;
`
const Selected = styled(SelectedParent)`
  height: ${clavishaWidth-4}px;
  border-radius: ${(clavishaWidth-4)/2}px;
  left: 2px;
`
const SelectedBlack = styled(SelectedParent)`
  height: ${clavishaWidth/2-2}px;
  border-radius: ${(clavishaWidth)/2}px;
  left: 1px;
  background: black; /* ЗАГЛУШКА */
`


const Clavisha = ({num,notes}) => {
  return <ClavishaEl num={num}>
     {notes.includes(positions[(num-1)%7].name)?<Selected/>:null}
  </ClavishaEl>
    
}
const BlackClavisha = ({num}) => {
  return <BlackClavishaEl num={num}><SelectedBlack/></BlackClavishaEl>
}

const Applicatura = ({notes}) => {

  const ClaviaturaUI = [];
  const notesCount = 7;
  const blackExclude = [3,7,10,14];

  let i;

  for (i=1;i<=notesCount;i++)
    ClaviaturaUI.push(<Clavisha num={i} key={i} notes={notes}/>);

  for (i=1;i<=notesCount;i++)
    if (!blackExclude.includes(i))
      ClaviaturaUI.push(<BlackClavisha num={i} key={-i}/>);
  

  return <Container>
    {ClaviaturaUI}
  </Container>
};

export default Applicatura;