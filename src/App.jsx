import React from 'react'
import styled from 'styled-components'
import Noti from './Notes/Noti'
import './globalStyles.css'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`

const Cell = styled.div`
  outline: 1px solid black;
  min-height: 1vh;
  text-align: center;
`

const Head = styled(Cell)`
  font-weight: 600;
`
const Body = styled(Cell)`

`

function App() {
const accords = {
  "do": ['do','mi','sol']
}

  return <div>
    <Grid>
      <Head>Аккорды</Head>
      <Head>Мажор</Head>
      <Head>Минор</Head>
      <Head>Септаккорд</Head>

      <Body>До (C)</Body>
      <Body><Noti notes={accords.do}/></Body>
      <Body></Body>
      <Body></Body>

      <Body>Ре (D)</Body>
      <Body></Body>
      <Body></Body>
      <Body></Body>
    </Grid>

  </div>
}

export default App;
