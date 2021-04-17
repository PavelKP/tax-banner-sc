import styled from 'styled-components';
import Variable from '../variables';

export const Legend = styled.legend`
	width: 165px;
  margin: 0;
  margin-bottom: 3px;
  padding: 5px 0;

  font-family: ${Variable.Font.labGrotesqueMedium};
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;

	${(props) => props.short && `
	  width: 150px;
    padding-bottom: 0;
    margin-bottom: 0;
	`};

	${(props) => props.tags && `
    margin-bottom: 20px;
	`};

	@media ${Variable.MediaQuery.tablet} {
		${(props) => props.short && `
      width: 389px;
      margin-bottom: 0;
	`};

	${(props) => props.tags && `
      width: 136px;
	`};
	}
`;

