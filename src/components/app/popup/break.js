import styled from 'styled-components';
import Variable from '../../variables';

export const Break = styled.br`
	display: none;

	@media ${Variable.MediaQuery.tablet} {
		display: inline;
	}

	@media ${Variable.MediaQuery.laptop} {
		display: none;
	}
`;
