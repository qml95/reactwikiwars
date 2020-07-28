import React from 'react'
import { Link } from "react-router-dom";
import Text from "../../lib/text";
import { StyledNavbar, StyledLinkList, StyledLink } from './styles'

const Navbar = () => (
	<StyledNavbar>
		<StyledLinkList>
			<StyledLink>
				<Link to="/">
					<Text tag="span" size="base">
						Accueil
					</Text>
				</Link>
			</StyledLink>
			<StyledLink>
				<Link to="/starships">
					<Text tag="span" size="base">Vaisseaux</Text>
				</Link>
			</StyledLink>
			<StyledLink>
				<Link to="/characters">
					<Text tag="span" size="base">Personnages</Text>
				</Link>
			</StyledLink>
			<StyledLink>
				<Link to="/weapons">
					<Text tag="span" size="base">Armes</Text>
				</Link>
			</StyledLink>
		</StyledLinkList>
	</StyledNavbar>
); 

export default Navbar