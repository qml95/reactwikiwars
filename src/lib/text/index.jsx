import * as React from 'react';
import {StyledText} from './styles'
import { color, font, fontWeight } from '../_utils/branding'

const Text = ({
	children,
	classname,
	textcolor = color.black,
	italic = false,
	tag,
	upper = false,
	weight = fontWeight.base,
	size = font.base
}) => (
	<StyledText
		as={tag}
		classname={classname}
		textcolor={textcolor}
		weight={weight}
		size={size}
		upper={upper}
		italic={italic}
	>
		{children}
	</StyledText>
)

export default Text