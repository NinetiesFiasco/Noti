import styled from 'styled-components'

export const Grid = styled.div`
margin: 8px;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
`

export const Cell = styled.div`
outline: 1px solid black;
min-height: 1vh;
text-align: center;
`

export const Head = styled(Cell)`
font-weight: 600;
`
export const Body = styled(Cell)`

`