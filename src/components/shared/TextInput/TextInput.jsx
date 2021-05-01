import React from 'react';
import { Legend } from '~shared/legend';
import { InnerTextInput } from './innerTextInput';
import { Tooltip } from './tooltip';

export const TextInput = (props) => (
	<>
		<Legend>Ваша зарплата в месяц</Legend>
		<InnerTextInput invalid={props.invalid} placeholder="50 000 &#8381;"/>
		<Tooltip>{props.validateMessage}</Tooltip>
	</>
);
