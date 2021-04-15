import styled from 'styled-components';
import Variable from '../../variables';

export const Text = styled.span`
  margin-right: 3px;
	color: ${(props) => props.pale ? Variable.Color.grey : Variable.Color.black};
`;
