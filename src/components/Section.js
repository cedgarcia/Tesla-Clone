import React from 'react'
import styled from 'styled-components'


const Section = ({ title, description, leftBtnText, rightBtnText, backgroundImg })=> {
  // console.log(props)
  return (
    <Sections bgImg = { backgroundImg }>
      <HeroText>
        <h1>{ title }</h1>
        <p>{ description }</p>
      </HeroText>

      <Buttons>
        <ButtonGroup>
          <LButton>{ leftBtnText }</LButton>
          { rightBtnText &&
            <RButton>{ rightBtnText }</RButton>
          }

        </ButtonGroup>

        <DownArrow src = './images/down-arrow.svg'/>
      </Buttons>
    </Sections>
  )
}
 
export default Section

const Sections = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(/images/model-s.jpg) no-repeat center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${ props => `url('/images/${ props.bgImg }')`};

`
const HeroText = styled.div`
  color: red;
  // background-color: red ;1
  padding: 15vh;
`


const ButtonGroup =styled.div`
  display: flex;
  margin-bottom: 1rem;
  @media(max-width: 768px) {
    flex-direction: column;

  }
`

const LButton = styled.div`
  background-color: rgba(23, 26, 32, 0.85); 
  margin: 0 1.3rem;
  height: 48px;
  width:256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;   
  border-radius: 100px;
  opacity: 0.75; 
  text-transform: uppercase;
  font-size: 12px ;
  cursor: pointer;
  @media(max-width: 768px) {
    margin-bottom: 1rem; 
  }
`
const RButton = styled(LButton)`
  background-color: white;
  color: black;
  
`

const DownArrow = styled.img`
  margin-top:1rem;
  height: 40px;
  animation: animateDown infinite 1.5s;

`

const Buttons = styled.div`
  margin-bottom: 1rem;
`