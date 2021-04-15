import React from 'react';
import { Input } from '../input';
import { Label } from '../label';
import { HiddenInput } from './hiddenInput';
import { Text } from './text';

export const Checkbox = (props) => (
	<Label>
		<HiddenInput name={props.name} value={props.value} defaultChecked={props.checked} disabled={props.disabled}/>
		<Input box>{props.children}</Input>
		<Text>{props.text}</Text>
		<Text pale>{props.subText}</Text>
	</Label>
);
