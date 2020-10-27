import React from 'react'
import styled from 'styled-components'
import key from './key.png'
import {Container} from './Noti'


const StanSize = 10;

const Line = styled.div`
  border-bottom: 1px solid black;
  margin: 10px;
`

const positions = [
  {name:"do",top:52},
  {name:"re",top:46},
  {name:"mi",top:41},
  {name:"fa",top:35},
  {name:"sol",top:29},
  {name:"la",top:24},
  {name:"si",top:19}
]

const DopLine = styled(Line)`
  margin: ${StanSize}px 50% ${StanSize}px 30%;
`

const Key = styled.img`
  position: absolute;
  width: 20px;
  left: 15px;
  top: -5px;
`

const Nota = styled.div`
  position: absolute;
  left: 35%;
  top: ${props=>props.fromTop}px;
  background: black;
  width: 16px;
  height: 8px;
  border-radius: 10px/5px;
  color: pink;
`

const Stan = ({notes}) => {

  let linesUI=[];
  for (var i=0;i<5;i++)
    linesUI.push(<Line key={i}/>)


let notaUI = positions.map((n,key)=>{
  return notes.includes(n.name)
    ?<Nota fromTop={n.top} key={key} />
    :null
})

  return <Container>
    <Key src={key} />
    {linesUI}
    <DopLine/>
    {notaUI}    
  </Container>

}
export default Stan