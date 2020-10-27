import React from 'react'
import key from './key.png'
import {Container} from './Noti'
import {Nota,DopLine,Line,Key,Bemol,Diez} from './StanComponents'

const positions = [
  {name:"do",top:52},
  {name:"re",top:46},
  {name:"mi",top:41},
  {name:"fa",top:35},
  {name:"sol",top:29},
  {name:"la",top:24},
  {name:"si",top:19}
]

const NotaEl = ({fromTop,minor}) => {
  let bemolDiez = null;
  if (minor<0) bemolDiez = <Bemol>b</Bemol>
  else if (minor>0) bemolDiez = <Diez>#</Diez>
  
  return <Nota fromTop={fromTop}>{bemolDiez}</Nota>
}

const Stan = ({notes,minor}) => {

  let linesUI=[]
  for (var i=0;i<5;i++)
    linesUI.push(<Line key={i}/>)
  let index = -1
  let notaUI = positions.map((n,key)=>{    
    if (notes.includes(n.name)){
      index += 1
      let minorVal = minor[index]
      return <NotaEl fromTop={n.top} minor={minorVal} key={key} />
    }
    return null;
  })

  return <Container>
    <Key src={key} />
    {linesUI}
    <DopLine/>
    {notaUI}    
  </Container>
}

export default Stan