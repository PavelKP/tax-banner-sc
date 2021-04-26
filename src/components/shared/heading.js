import styled from 'styled-components';
import Variable from '../variables';
import { VisuallyHidden } from './visuallyHidden';

export const Heading = styled.h1`
  max-width: 288px;
  margin: 0;
  margin-bottom: 6px;

  font-family: ${Variable.Font.labGrotesqueMedium};

  font-size: 18px;
  font-weight: 500;
  line-height: 24px;

	${(props) => props.visuallyHidden ? VisuallyHidden : ``}

	${(props) => props.subheading && `
		width: 100%;
		margin-bottom: 3px;
		padding: 5px 0;

		font-family: ${Variable.Font.labGrotesqueMedium};
		font-size: 14px;
		font-weight: 500;
		line-height: 24px;
	`}

	${(props) => props.tags && `
    margin-bottom: 20px;
	`}

	@media ${Variable.MediaQuery.tablet} {
		${(props) => props.tags && `
      max-width: 140px;
      margin-bottom: 0;
		`};
	}
`;


