import styled from 'styled-components';
import Variable from '../../variables';
import { Tooltip } from './tooltip';

export const InnerTextInput = styled.input.attrs({
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
		border-color: ${Variable.Color.black};
	}

	&:focus:not(:focus-visible) {
		color: ${Variable.Color.greyLight};
		border-color: ${Variable.Color.greyBlue};
	}

	// focus-visible применяется, когда на элементе срабатывает :focus
	// && браузер решает, что нужно сделать фокус видимым (mouse vs keyboard)
	// На инпуты всегда вешает фокус и с mouse и с keyboard
	&:focus-visible {
		color: ${Variable.Color.black};
		border-color: ${Variable.Color.black};
	}

	&:disabled {
		border-color:  ${Variable.Color.grey};
		background-color: transparent;

		&::placeholder {
			color: ${Variable.Color.grey};
		}
	}

	${(props) => props.invalid && `
		border-color: ${Variable.Color.crimson};
		color: ${Variable.Color.crimson};

		&:hover {
			border-color: ${Variable.Color.crimson};
		}

		&:focus {
			border-color: ${Variable.Color.crimson};
		}

		& + ${Tooltip} {
			display: block;
		}
	}
	`}

	@media ${Variable.MediaQuery.tablet} {
  	margin-bottom: 7px;
	}
`;

