import styled from 'styled-components';
import Variable from '../variables';


export const Button = styled.button`
	display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
	width: 100%;

  text-align: center;

  background-color: transparent;
  border: 0;

  cursor: ${Variable.Cursor.hand};

	${(props) => props.small && `
		height: 40px;
    font-size: 12px;
    line-height: 16px;
    color: ${Variable.Color.white};

    background: ${Variable.Graradient.crimson};
    background-color: ${Variable.Color.crimson};

    border-radius: 6px;
    box-shadow: ${Variable.Shadow.red};

    &:hover {
      background: ${Variable.Color.redIntense};
    }

    &:disabled {
      box-shadow: none;
      background: ${Variable.Color.greyLight};
    }

		@media ${Variable.MediaQuery.tablet} {
			height: 56px;
			font-family: ${Variable.Font.labGrotesqueMedium};
			font-weight: 500;
			font-size: 16px;
			line-height: 24px;
		}
	`}

	${(props) => props.text && `
		min-height: 24px;
		max-width: 150px;
		width: auto;

		font-family: ${Variable.Font.labGrotesqueMedium};
		font-size: 14px;
		line-height: 24px;
		font-weight: 500;

		color: ${Variable.Color.crimson};

		&:hover {
			color: ${Variable.Color.orange};
		}

		&:active {
			color: ${Variable.Color.crimson};
		}
	`}
`;

