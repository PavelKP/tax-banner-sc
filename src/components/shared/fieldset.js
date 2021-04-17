import styled from 'styled-components';

export const Fieldset = styled.fieldset`
  margin: 0;
  padding: 0;
  border: 0;

	margin-bottom: ${(props) => props.bottom ? props.bottom : 0}px;
`;
