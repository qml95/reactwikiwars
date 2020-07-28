import React from 'react'
import {
    Link,
  } from "react-router-dom";
import { StyledNavbar, StyledLinkList, StyledLink } from './styles'

const Navbar = () => (
	<StyledNavbar>
		<StyledLinkList>
			<StyledLink>
				<Link to="/">Home</Link>
			</StyledLink>
			<StyledLink>
				<Link to="/starships">Starships</Link>
			</StyledLink>
		</StyledLinkList>
	</StyledNavbar>
); 

export default Navbar