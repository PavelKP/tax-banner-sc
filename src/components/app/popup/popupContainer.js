import styled from 'styled-components';
import Variable from '../../variables';

export const PopupContainer = styled.article`
  position: relative;
  width: 320px;
  margin: 0 auto;
  padding: 32px 16px 16px 16px;

  background-color: ${Variable.Color.white};

	@media ${Variable.MediaQuery.tablet} {
    width: 453px;
    margin-top: 120px;
    padding: 32px;

    border-radius: 30px;
	}

	@media ${Variable.MediaQuery.laptopL} {
		width: 552px;
	}
`;
