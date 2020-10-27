import React from 'react'
import {
  Container,ClavishaEl,BlackClavishaEl,Selected,SelectedBlack
} from './ApplicaturaComponents'

const Clavisha = ({num, children}) => {
  return <ClavishaEl num={num}>{children}</ClavishaEl>    
}
const BlackClavisha = ({num,children}) => {
  return <BlackClavishaEl num={num}>{children}</BlackClavishaEl>
}
const Applicatura = ({notes,minor}) => {

  const ClaviaturaUI = []
  const allNotes = ['do','re','mi','fa','sol','la','si']
  let findedNotes = 0;

  for (let i=0;i<allNotes.length;i++){    
    let num = i+1;
    let whiteSelected = false
    let blackSelected = false

    if (notes.includes(allNotes[i])){
      if (minor[findedNotes] === 0)
        whiteSelected = true
      if (minor[findedNotes] === 1)
        blackSelected = true
      findedNotes += 1
    } else if (allNotes[i+1] && minor[findedNotes] === -1){
      blackSelected = true
    }


    ClaviaturaUI.push(<Clavisha num={num} key={i}>{whiteSelected?<Selected />:null}</Clavisha>)    
    if ([1,2,4,5,6].includes(num))
      ClaviaturaUI.push(<BlackClavisha num={num} key={-i-1}>{blackSelected?<SelectedBlack/>:null}</BlackClavisha>)    
  }

  return <Container>
    {ClaviaturaUI}
  </Container>
};

export default Applicatura;

/*

const positions = [
    {name:"do",pos:1},
    {name:"re",pos:2},
    {name:"mi",pos:3},
    {name:"fa",pos:4},
    {name:"sol",pos:5},
    {name:"la",pos:6},
    {name:"si",pos:7}
  ]

  const ClaviaturaUI = []
  const notesCount = 7
  const black = [1,2,4,5,6]

  let i;
  let noteIndex = 0;
  
  for (i=1;i<=notesCount;i++){

    let selected=null,selectedBlack=null;
    let nota = positions[(i-1)%7].name
    let minorVal;

    if (notes.includes(nota)){
      minorVal = minor[noteIndex]
      noteIndex += 1;

      if (minorVal === 0){
        selected = <Selected />
      } else if (minorVal === 1){
        selectedBlack = <SelectedBlack />
      } else if (notes.includes(positions[i%7].name) && minor[noteIndex+1]===-1 ){
        selectedBlack = <selectedBlack />
      }
    }
    
    ClaviaturaUI.push(<Clavisha num={i} key={i} notes={notes} minor={minor}>{selected}</Clavisha>)    
    if (black.includes(i))
      ClaviaturaUI.push(<BlackClavisha num={i} key={-i}>{selectedBlack}</BlackClavisha>) 

*/