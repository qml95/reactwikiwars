import styled from 'styled-components'
import { font, spacing, breakpoints } from '../_utils/branding'

export const StyledText = styled.span`
    margin: ${spacing.none};
    color:${props => props.textcolor};
    font-family: Arial, sans-serif;
    font-style: ${props =>(props.italic ? 'italic' : '')};
    text-transform: ${props => (props.upper ? 'uppercase' : '')};

    ${props =>
    Array.isArray(props.weight)
      ? `
        font-weight: ${props.weight[0]};

        @media (min-width: ${breakpoints.tablet}) {
          font-weight: ${props.weight[1]};
        }

        @media (min-width: ${breakpoints.desktop}) {
          font-weight: ${props.weight[2]};
        }
      `
      : `font-weight: ${props.weight};`
  }

  ${props =>
    Array.isArray(props.size)
      ? `
        font-size: ${font[String(props.size[0])].size};
        line-height: ${font[String(props.size[0])].lineHeight};

        @media (min-width: ${breakpoints.tablet}) {
          font-size: ${font[String(props.size[1])].size};
          line-height: ${font[String(props.size[1])].lineHeight};
        }

        @media (min-width: ${breakpoints.desktop}) {
          font-size: ${font[String(props.size[2])].size};
          line-height: ${font[String(props.size[2])].lineHeight};
        }
      `
      : `
        font-size: ${font[String(props.size)].size};
        line-height: ${font[String(props.size)].lineHeight};
      `
  }
`