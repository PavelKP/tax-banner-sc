import React from 'react';
import { Legend } from '~shared/legend';
import { Input } from './textinput';

export const TextInput = (props) => (
	<>
		<Legend>Ваша зарплата в месяц</Legend>
		<Input placeholder="50 000 &#8381;" />
		<p className="form__tooltip">Поле обязательно для заполнения</p>
	</>
);
