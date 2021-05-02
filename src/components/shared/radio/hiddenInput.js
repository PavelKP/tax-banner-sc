import styled from 'styled-components';
import Variable from '../../variables';
import { VisuallyHidden } from '../visuallyHidden';
import { Input } from '../input';

export const HiddenInput = styled.input.attrs({
	type: `radio`,
})`
	${VisuallyHidden}

	&:checked + ${Input} {
		color: ${Variable.Color.white};

		background: ${Variable.Graradient.crimson};
		background-color: ${Variable.Color.crimson};
	}

	&:not(:disabled):hover + ${Input} {
		border: 1px solid ${Variable.Color.black};
	}

	&:disabled + ${Input} {
    color: ${Variable.Color.white};
    border-color: ${Variable.Color.greyLight};
		background: ${Variable.Color.greyLight};
  }

	&:disabled:checked + ${Input} {
		color: ${Variable.Color.white};

		background: ${Variable.Graradient.crimson};
		background-color: ${Variable.Color.crimson};
  }

	&:focus:focus-visible + ${Input} {
		outline: 2px solid ${Variable.Color.black};
	}
`;

