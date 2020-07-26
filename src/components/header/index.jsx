import React from 'react';
import Logo from '../logo'
import Text from '../../lib/text'
import { fontWeight, color } from '../../lib/_utils/branding'
import StyledHeader from './styles';


const Header = () => (
	<StyledHeader>
		<Logo/>
		<Text 
			tag="h1"
			size='xxl'
			weight={fontWeight.semibold}
			textcolor={color.blue}
			classname="styledTitle"
		>
			WikiWars
		</Text>
		<Logo/>
	</StyledHeader>
);

export default Header;