import React from 'react';
import { IndexLinkContainer } from "react-router-bootstrap";
import { useTranslation } from "react-i18next";
import styled from 'styled-components';

const StyledNavlink = styled('div')`
	border: 1px solid black;
	width: 50px;
`;

const Navlink = (props) => {
	const { to, image, title } = props;
	const { t } = useTranslation('navigation');
	const navbarIconHeight = 50;

	return (
		<StyledNavlink>
			<IndexLinkContainer to={to} activeClassName="active">
				<img
					src={require(`../../../assets/navbar/${image}.svg`)}
					title={ t(title) }
					height={navbarIconHeight}
				/>
			</IndexLinkContainer>
		</StyledNavlink>
	);
};

export default Navlink;
