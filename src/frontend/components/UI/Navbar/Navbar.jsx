import React from 'react';
import Navlink from './Navlink';
import styled from "styled-components";

const StyledNavbar = styled('div')`
	float: left;
	height: 90%;
	width: 10%;
	padding: 5px;
`;

const Navbar = () => {
	return (
		<StyledNavbar>
			<Navlink to='/' image='home' title='workspace' />
			<Navlink to='/notes' image='notes' title='notes' />
			<Navlink to='/note/0' image='note' title='note' />
			<Navlink to='/outfits' image='outfits' title='outfits' />
			<Navlink to='/outfit' image='outfit' title='outfit' />
			<Navlink to='/names' image='names' title='names' />
			<Navlink to='/images' image='images' title='images' />
			<Navlink to='/comparision' image='comparision' title='comparision' />
		</StyledNavbar>
	);
};

export default Navbar;