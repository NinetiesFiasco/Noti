import React from 'react'
import Noti from './Notes/Noti'
import './globalStyles.css'
import {Grid,Head,Body} from './AppComponents'

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
      <Body><Noti notes={accords.do} minor={[0,0,0]}/></Body>
      <Body><Noti notes={accords.do} minor={[0,-1,0,0]}/></Body>
      <Body></Body>

      <Body>Ре (D)</Body>
      <Body></Body>
      <Body></Body>
      <Body></Body>
    </Grid>

  </div>
}

export default App;
