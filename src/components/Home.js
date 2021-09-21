import React from 'react'
import styled from 'styled-components'
import Section from './Section'
function Home() {
  return (
    <Container>

      <Section
        title='Model S'
        description='Order Online for Touchless Delivery'
        backgroundImg='model-s.jpg'
        leftBtnText='Custom order'
        rightBtnText='Existing inventory'
        
      />
      <Section
        title='Model Y'
        description='Order Online for Touchless Delivery'
        backgroundImg='model-y.jpg'
        leftBtnText='Custom order'
        rightBtnText='Existing inventory'
      />

      
     < Section
        title='Model 3'
        description='Order Online for Touchless Delivery'
        backgroundImg='model-3.jpg'
        leftBtnText='Custom order'
        rightBtnText='Existing inventory'
 

     />
      <Section
         title='Modal X'
         description='Order Online for Touchless Delivery'
         backgroundImg='model-x.jpg'
         leftBtnText='Custom order'
         rightBtnText='Existing inventory' 
      />

      <Section
        title='Solar Panels'
        description='Lowest Cost Solar Panels in America'
        backgroundImg='solar-panel.jpg'
        leftBtnText='Order Now'
        rightBtnText='Learn More'   
      
      
      />

      <Section
        title='Solar Roof'
        description='Produce Energy From Your Roof'
        backgroundImg='solar-roof.jpg'
        leftBtnText='Order Now'
        rightBtnText='Learn More'   
      
      
      />

      <Section
        title='Accessories'
        // description='Lowest Cost Solar Panels in America'
        backgroundImg='accessories.jpg'
        leftBtnText='Shop Now'
        // rightBtnText='Learn More'   
      
      
      />




    </Container>
  )
}

export default Home


// Styled Components
const Container = styled.div`
  height: 100vh;

`