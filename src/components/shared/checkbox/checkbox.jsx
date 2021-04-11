import React from 'react';
import styled from 'styled-components';
import { Input } from '../input';
import { Label } from '../label';
import { HiddenInput } from './hiddenInput';

export const Checkbox = (props) => (
	<Label>
		{/* <input className="visually-hidden form__input-hidden" type="checkbox" name="payment" value="" defaultChecked />
		<span className="form__input form__input--box"></span> */}
		<HiddenInput name={props.name} value={props.value} defaultChecked={props.checked} disabled={props.disabled}/>
		<Input box>{props.children}</Input>
		<span className="form__text">78 000 рублей</span>
		<span className="form__text form__text--pale">в 2-ой год</span>
	</Label>
);
