import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Container>
      <a>
        <img src = '/images/logo.svg' alt= ''/>

      </a>
      <Menu>
      <p><a href='#'>Model S</a></p>
      <p><a href='#'>Model 3</a></p>
      <p><a href='#'>Model X</a></p>
      <p><a href='#'>Model Y</a></p>
      <p><a href='#'>Solar Roof</a></p>
      <p><a href='#'>Solar Panels</a></p>
      </Menu>
    </Container>
  )
}

export default Header


const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
`
const Menu = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-weight: 600;
    padding: 0 1rem;
    flex-wrap: nowrap;
  }

`