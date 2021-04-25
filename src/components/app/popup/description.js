import styled from 'styled-components';
import Variable from '../../variables';

export const Description = styled.p`
	min-height: 72px;
  margin: 0;
  margin-bottom: 10px;
  padding: 10px 12px 10px 0;

  font-size: 12px;
  line-height: 16px;
  color: ${Variable.Color.grey};


	@media ${Variable.MediaQuery.tablet} {
		font-size: 14px;
    line-height: 24px;
	}
`;
