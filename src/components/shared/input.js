import styled from 'styled-components';
import Variable from '../variables';

export const Input = styled.span`
display: block;

width: 288px;
height: 40px;
margin-bottom: 9px;
padding: 8px 10px 8px 10px;

line-height: 24px;
color: ${Variable.Color.black};

border: 1px solid ${Variable.Color.greyBlue};
border-radius: 3px;

outline: none;

	${(props) => props.tag && `
		display: flex;
		justify-content: center;
		align-items: center;

		width: auto;
		min-width: 57px;
		height: 36px;
		margin: 0;
		margin-right: 9px;
		padding: 6px 12px;

		font-size: 14px;

		border: 1px solid transparent;
		border-radius: 50px;

		cursor: ${Variable.Cursor.hand};
		background-color: ${Variable.Color.greyWhite};

		&:hover {
			background-color: ${Variable.Color.greyBlue};
		}

		&:active {
			color: ${Variable.Color.white};

			background: ${Variable.Graradient.crimson};
			background-color: ${Variable.Color.crimson};
		}
	`}

	${(props) => props.box && `
		position: relative;

		width: 20px;
		height: 20px;
		margin: 0;
		margin-right: 11px;
		padding: 0;

		border-radius: 6px;
	`}
`;
