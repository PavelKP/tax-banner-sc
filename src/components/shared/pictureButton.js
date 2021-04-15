import styled from 'styled-components';
import Variable from '../variables';

export const PictureButton = styled.button`
    position: absolute;
    top: 22px;
    right: 21px;

    width: 12px;
    height: 12px;
		padding: 0;
  	border: 0;

    background-size: 12px;
    background-color: rgba(0,0,0,0);
    background-image: url(${(props) => props.url});
    background-repeat: no-repeat;
    background-position: 50%;

    cursor: ${Variable.Cursor.hand};

		@media (min-width: 768px) {
		& {
			top: 27px;
			right: 23px;
			width: 18px;
			height: 18px;
			background-size: 18px;
		}
	}

`;
