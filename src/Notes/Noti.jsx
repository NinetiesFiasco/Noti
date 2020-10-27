import React from 'react'
import styled from 'styled-components'
import Stan from './Stan'
import Applicatura from './Applicatura'


export const Container = styled.div`
  position: relative;
  min-width: 200px;
`

const Noti = ({notes,minor}) => {
  return <Container>
      <Stan notes={notes} minor={minor} />
      <Applicatura notes={notes} minor={minor} />
    </Container>
}

export default Noti