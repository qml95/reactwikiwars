import styled from 'styled-components'
import { spacing, color } from '../../lib/_utils/branding'

const StyledNavbar = styled.nav`
	background-color: ${color.mediumGrey};
`
const StyledLinkList = styled.ul`
	display: flex;
	justify-content: center;
	list-style: none;
	margin: ${spacing.none};
	padding-bottom: ${spacing['space-2']};
`

const StyledLink = styled.li`
	padding: 0 ${spacing['space-4']};
	a {
		text-decoration: none;
	}
`

export { StyledNavbar, StyledLinkList, StyledLink}