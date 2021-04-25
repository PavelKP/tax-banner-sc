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
`;
