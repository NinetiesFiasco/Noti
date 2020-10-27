import React from 'react'
import styled from 'styled-components'
import Stan from './Stan'
import Applicatura from './Applicatura'


export const Container = styled.div`
  position: relative;
  min-width: 200px;
`



const Noti = ({notes}) => {
  return <Container>
      <Stan notes={notes} />
      <Applicatura notes={notes} />
    </Container>
}

export default Noti