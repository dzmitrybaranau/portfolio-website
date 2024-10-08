import React from 'react'
import styled, { css } from 'styled-components'
import {
  Typography,
  TypographyColors,
  TypographyWeight,
} from '../StyledComponents'
import ContactDownloadButtons from './components/ContactDownloadButtons'
import { theme } from '../../theme/theme'

export interface IInterestedProps {
  onContactMeClick: () => void
  isModalOpen: boolean
}

const Root = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 95px 0;
  height: 480px;

  ${theme.breakpoints.md} {
    padding: 64px 0;
  }
  ${theme.breakpoints.sm} {
    padding: 52px 0;
  }
`

/**
 * Section for action initiation
 */
function Interested(props: IInterestedProps) {
  const { onContactMeClick, isModalOpen } = props
  return (
    <Root>
      <Typography
        weight={TypographyWeight.Bold}
        fontSize="64px"
        color="#282828"
        textAlign="center"
        mB="14px"
        tag="h2"
        customStyles={css`
          ${theme.breakpoints.sm} {
            font-size: 52px;
            margin-bottom: 10px;
          }
          ${theme.breakpoints.xxs} {
            font-size: 48px;
            margin-bottom: 10px;
          }
        `}
      >
        Interested?
      </Typography>
      <Typography
        weight={TypographyWeight.Regular}
        fontSize="24px"
        color={TypographyColors.Secondary}
        textAlign="center"
        mB="52px"
        customStyles={css`
          ${theme.breakpoints.sm} {
            font-size: 20px;
            margin-bottom: 52px;
          }
          ${theme.breakpoints.xxs} {
            font-size: 18px;
            margin-bottom: 44px;
          }
        `}
      >
        to get more info
      </Typography>
      <ContactDownloadButtons
        isModalOpen={isModalOpen}
        onContactMeClick={onContactMeClick}
      />
    </Root>
  )
}

export default Interested
