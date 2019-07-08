import React from 'react';
import { IndexLinkContainer } from "react-router-bootstrap";
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const StyledNavlink = styled('div')`
	mask: url(${(props) => props.mask});
	background: black;
	border: 1px solid black;
	border-radius: 5px;
	width: ${(props) => props.width ? props.width : 60}px;
	height: ${(props) => props.height ? props.height : 60}px;
	cursor: pointer;
	margin-bottom: 5px;
	padding: 4px;
	&.active {
		background: red;
	};
`;

const Navlink = (props) => {
	const { to, image, title } = props;
	const { t } = useTranslation('navigation');
	const navbarIconHeight = 60;

	return (
		<IndexLinkContainer to={to} activeClassName="active">
			<StyledNavlink
				height={navbarIconHeight}
				width={navbarIconHeight}
				mask={require(`../../../assets/navbar/${image}.svg`)}
			/>
		</IndexLinkContainer>
	);
};

export default Navlink;
