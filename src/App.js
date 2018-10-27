import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background: palegoldenrod;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledInput = styled.input`
  font-size: 1.5rem;
  background: rgba(50, 50, 50, 0.5);
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 20px;
  margin: 10px;
  color: #eee;
`

function App() {
  const [name, setName] = useState('Guga')
  const [surname, setSurname] = useState('Gongadze')

  useEffect(() => {
    document.title = `${name} ${surname}`
  })

  return (
    <Container>
      <StyledInput value={name} onChange={(e) => setName(e.target.value)} />
      <StyledInput value={surname} onChange={(e) => setSurname(e.target.value)} />
    </Container>
  )
}

export default App
