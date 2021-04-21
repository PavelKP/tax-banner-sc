import styled from 'styled-components';
import Variable from '../../variables';
import { VisuallyHidden } from '../visuallyHidden';
import { Input } from '../input';

export const HiddenInput = styled.input.attrs({
	type: `checkbox`,
})`
	${VisuallyHidden}

	&:checked + ${Input} {
    background: ${Variable.Graradient.crimson};
    background-color: ${Variable.Color.crimson};
    border: 0;

    &::before {
      content: "";
      position: absolute;
      top: 5px;
      left: 3px;

      display: block;

      width: 14px;
			height: 6px;
      background-color: transparent;

      border: 2px solid ${Variable.Color.white};
      border-top: 0;
      border-right: 0;
      transform: rotate(-45deg);
    }
  }

	&:not(:disabled):hover + ${Input} {
		border: 1px solid ${Variable.Color.black};

		&::before {
      top: 4px;
      left: 2px;
		}
	}

	&:disabled + ${Input} {
		background: ${Variable.Color.greyLight};
		border: 0;
	}
`;

