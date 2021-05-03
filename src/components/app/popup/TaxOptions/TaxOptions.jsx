import React, {useRef, useState} from 'react';
import { Checkbox } from '~shared/Checkbox/Checkbox';
import { PictureButton } from '~shared/pictureButton';
import { Radio } from '~shared/Radio/Radio';
import { Heading } from '~shared/heading';
import { Fieldset } from '~shared/fieldset';
import { PopupContainer } from '../popupContainer';
import { Legend } from '~shared/legend';
import { TextInput } from '~shared/TextInput/TextInput.jsx';
import { Button } from '~shared/button.js';
import { Description } from '../description';
import { Break } from '../break';
import { Section } from '../section';
import { Form } from '../form';
import { ControllSetWrapper } from '../controlSetWrapper';
import { TagWrapper } from '../tagWrapper';

export const TaxOptions = () => {
	const formRef = useRef();

	const handleSubmit = (evt) => {
		evt.preventDefault();
		const formData = new FormData(formRef.current);

		const Data = {
			year1: formData.get(`year1`),
			year2: formData.get(`year2`),
			year3: formData.get(`year3`),
			year4: formData.get(`year4`),
			reduceType: formData.get(`reduceType`),
		}

		console.log(Data);
	}

	return (
				<Form onSubmit={handleSubmit} ref={formRef}>
					<Fieldset bottom={20}>
						<Legend short>Итого можете внести в качестве досрочных:</Legend>
						<Checkbox name="year1" value="1" text={`78 000 рублей`} subText={`в 1-ый год`} />
						<Checkbox name="year2" value="2" checked text={`68 000 рублей`} subText={`в 2-ой год`} />
						<Checkbox name="year3" value="3" checked disabled text={`58 000 рублей`} subText={`в 3-ий год`} />
						<Checkbox name="year4" value="4" disabled text={`32 000 рублей`} subText={`в 4-ий год`} />
					</Fieldset>
					<Fieldset aria-labelledby="fake-legend-reduce">
						<ControllSetWrapper>
						<Heading id="fake-legend-reduce" as="h2" aria-hidden="true" subheading tags>Что уменьшаем?</Heading>
							<TagWrapper>
								<Radio name="reduceType" value="payment" checked>Платеж</Radio>
								<Radio name="reduceType" value="term">Срок</Radio>
							</TagWrapper>
						</ControllSetWrapper>
						<Button small type="submit">Добавить</Button>
					</Fieldset>
				</Form>
	);
}

