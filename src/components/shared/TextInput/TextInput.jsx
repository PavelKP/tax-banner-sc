import React from 'react';
import { Legend } from '~shared/legend';
import { InnerTextInput } from './innerTextInput';
import { Tooltip } from './tooltip';

export const TextInput = (props) => {
	return (
		<>
			<Legend>Ваша зарплата в месяц</Legend>
			<InnerTextInput
				name={props.name}
				value={props.value}
				onChange={props.onChange}
				invalid={props.invalid}
				placeholder="50 000 &#8381;"/>
			<Tooltip>{props.validateMessage}</Tooltip>
		</>
	);
};
