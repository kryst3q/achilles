import React from 'react';
import styled from "styled-components";

const TextInput = styled.input.attrs({
	type: 'text'
})`
	border-radius: 3px;
	border: 1px solid lightgray;
`;

export default TextInput;
