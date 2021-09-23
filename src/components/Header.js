import React, {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { selectCars } from '../features/car/carSlice'
import { useSelector } from 'react-redux'


function Header() {

  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars)
  console.log(cars)

  return (
    <HeaderWrapper>
      <a>
        <img src = '/images/logo.svg' alt= ''/>
      </a>

      <Menu>

        {cars && cars.map((car, index)=>(
          <a key= {index} href = '#'>{ car }</a>
        ))}
        {/* <a href='#'>Model S</a>
        <a href='#'>Model 3</a>
        <a href='#'>Model X</a>
        <a href='#'>Model Y</a> */}
        <a href='#'>Solar Roof</a>
        <a href='#'>Solar Panels</a>
      </Menu>

      <NavMenu>
        <a href='#'>Shop</a>
        <a href='#'>Tesla Account</a>
        <BurgerMenu onClick= {()=> setBurgerStatus(true)}/>
        <BurgerNav show= {burgerStatus}>
          <CloseWrapper>
            <CloseMenu  onClick = {()=> setBurgerStatus(false)}/>
          </CloseWrapper>
          {cars && cars.map((car, index)=>(
          <li><a key= {index} href = '#'>{ car }</a></li>
        ))}
          <li><a href = '#'>Existing Inventory</a></li>
          <li><a href = '#'>Used Inventory</a></li>
          <li><a href = '#'>Trade-In</a></li>
          <li><a href = '#'>Test Drive</a></li>
          <li><a href = '#'>Cybertruck</a></li>
          <li><a href = '#'>Roadster</a></li>
          <li><a href = '#'>Semi</a></li>
          <li><a href = '#'>Charging</a></li>
          <li><a href = '#'>Powerwall</a></li>
          <li><a href = '#'>Commercial Energy</a></li>
          <li><a href = '#'>Utilies</a></li>
          <li><a href = '#'>Find Us</a></li>
          <li><a href = '#'>Support</a></li>
          <li><a href = '#'>Investor Relations</a></li>
        </BurgerNav>
      </NavMenu>


    </HeaderWrapper>
  )
}

export default Header


const HeaderWrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  top:0;
  left: 0;
  right: 0;
  z-index: 2;
  
`
const Menu = styled.div`
  display: flex;
  justify-content: space-between;

  @media(max-width: 768px) {
    display: none;
  }
  a {
    font-weight: 600;
    padding: 0 .8rem;
    flex-wrap: nowrap;
    text-transform: uppercase;
  }

`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    font-weight: 600;
    padding: 0 1rem;
    flex-wrap: nowrap;
   
  }  
`

const BurgerMenu = styled(MenuIcon)`
  cursor: pointer;

`

const BurgerNav = styled.div `
  background-color: white;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 280px;
  z-index: 100;
  height: 100vh;
  transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'} ;
  transition: transform .2s ease-in; 
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
  }
  a {
    font-weight:600;
  }

`

const CloseMenu = styled(CloseIcon)`
  cursor: pointer;
  
`
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 2rem 0;
  padding-right: 2rem;
`