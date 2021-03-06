import React from 'react'
import styled from 'styled-components'

import {
  Background,
  Box,
  Column,
  Flex,
  Heading,
  Overflow,
  Relative,
  ResponsiveStack,
  P,
} from 'serverless-design-system'

import NavLink from '../NavLink'
import WhiteButton from '../WhiteButtonNew'
import RightBoxBgNew from 'src/assets/images/footerRightBoxBgNew.svg'

const FlexWithShadow = styled(Flex.horizontallyCenter)`
  box-shadow: 0 -1px 50px 0 rgba(0, 0, 0, 0.15);

  @media screen and (max-width: 412px) {
    box-shadow: 0 2px 0 4px rgba(0, 0, 0, 0.1);
  }
`

const ResponsiveRightPreFooterBackground = styled(Background)`
    background-size: 100% 100%;

    @media screen and (max-width: 415px) {
      background-position: 59% 106%;
      background-size: 138% 103%;
    }
`

const LeftColumn = ({ heading, sentences }) => (
  <Background background='white' width={[1, 1, 1/2]}>
  <FlexWithShadow
    width={1}
    boxSizing='border-box'
    flexDirection='column'
    height='100%'
  >
    <Overflow
      o='hidden'
      width={1}
      py={[62, 62, 5]}
      px={[3, 3, 6]}
    >
        <Heading.h3
          color='black'
          fontFamily={'Soleil'}
          fontSize={5}
          letterSpacing={'-0.5px'}
          lineHeight={1.38}
        >
          {heading}
        </Heading.h3>
      {
        sentences.map((sentence, index) => (
          ( typeof sentence === 'string' ) ? (
            <P color='black' mt={0} key={index}>
              {sentence}
            </P>
          ) : (
            <React.Fragment key={index}>
              {sentence}
            </React.Fragment>
          )
        ))
      }
    </Overflow>
  </FlexWithShadow>
  </Background>
)

const RightColumn = ({ actions }) => (
  <Column height={'198px'} justifyContent='space-between'>  
    {actions.map(({ name, navProps }, index) => (
      <Box key={index}>
        <NavLink {...navProps}>
          <WhiteButton>{name}</WhiteButton>
        </NavLink>
      </Box>
    ))}
  </Column>
)

const Prefooter = ({ heading, sentences, actions }) => (
  <Relative
    top='-420px'
    mb={['100px', '100px', '-290px']}
    height='400px'
  >
    <ResponsiveStack
      bg='serverlessRed'
      o='hidden'
      height='100%'
    >
      <LeftColumn heading={heading} sentences={sentences} />
      <Box width={[1, 1, 1/2]}>
        <ResponsiveRightPreFooterBackground
          width={1}
          height={['322px', '322px', 'fullHeight']}
          background={`#fd5750 url(${RightBoxBgNew}) no-repeat`}
        >
          <Flex.center
            flexDirection='column'
            height='fullHeight'
            py={[0, 0, 0]}
            px={[0, 0, 0]}
          >
            <RightColumn actions={actions} />
          </Flex.center>
        </ResponsiveRightPreFooterBackground>
      </Box>
    </ResponsiveStack>
  </Relative>
)

export default Prefooter