import React from 'react';

export const TextInput = (props) => (
	<>
		<legend className="form__subheading">Ваша зарплата в месяц</legend>
		<input className="form__input" type="text" placeholder="50 000 &#8381;" />
		<p className="form__tooltip">Поле обязательно для заполнения</p>
	</>
);
