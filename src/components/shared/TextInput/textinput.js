import styled from 'styled-components';
import Variable from '../../variables';

export const Input = styled.input.attrs({
	type: `text`,
})`
	display: block;
	width: 100%;
	height: 40px;

	margin-bottom: 9px;
	padding: 8px 10px 8px 10px;

	line-height: 24px;
	color: ${Variable.Color.black};

	border: 1px solid ${Variable.Color.greyBlue};
	border-radius: 3px;

	outline: none;

	&::placeholder {
		color: ${Variable.Color.greyLight};
	}

	&:hover {
		border-color: ${Variable.Color.black};
	}

	&:focus {
		color: ${Variable.Color.black};
		border-color: ${Variable.Color.greyBlue};
	}

	&:focus-within {
		border-color: ${Variable.Color.black};
	}

	&:disabled {
		border-color:  ${Variable.Color.grey};
		background-color: transparent;

		&::placeholder {
			color: ${Variable.Color.grey};
		}
	}

	@media ${Variable.MediaQuery.tablet} {
  	margin-bottom: 7px;
	}
`;
