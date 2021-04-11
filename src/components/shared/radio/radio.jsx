import React from 'react';
import styled from 'styled-components';
import { Label } from '../label';
import { HiddenInput } from './hiddenInput';
import { Input } from '../input';

export const Radio = (props) => (
	<Label tag>
		<HiddenInput name={props.name} value={props.value} defaultChecked={props.checked} disabled={props.disabled}/>
		<Input tag>{props.children}</Input>
	</Label>
);


