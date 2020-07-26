import styled from 'styled-components';
import { color, spacing } from '../../lib/_utils/branding'

const StyledHeader = styled.div`
	display: flex;
	justify-content: space-between;
	padding: ${spacing['space-2']} ${spacing['space-6']};
	background-color: ${color.mediumGrey};
	align-items: center;
`

export default StyledHeader;