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

  // &:disabled:checked + ${Input} {
  //   &::before {
  //     background-color: ${Variable.Color.greyLight};
  //   }
  // }

  // &:disabled:checked + ${Input} {
  //   border-color: ${Variable.Color.greyLight};

  //   &::before {
  //     background-color: transparent;
  //     border-color: ${Variable.Color.greyLight};
  //   }
  // }

  // &:disabled ~ .form__description {
  //   color: ${Variable.Color.greyLight};
  // }

`;

