import styled from 'styled-components';
import Variable from '../variables';

export const Label = styled.label`
	display: flex;
	height: 57px;
	align-items: center;

	border-bottom: 1px solid ${Variable.Color.greyBlue};

	${(props) => props.tag && `
		align-items: flex-start;

		width: auto;
		height: auto;
		border: 0;
	`}
`;
