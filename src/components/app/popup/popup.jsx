import React from 'react';
import { Checkbox } from '~shared/Checkbox/Checkbox';
import { PictureButton } from '~shared/pictureButton';
import { Radio } from '~shared/Radio/Radio';
import { Heading } from '~shared/heading';
import { Fieldset } from '~shared/fieldset';
import { PopupContainer } from './popupContainer';
import { Legend } from '~shared/legend';
import { TextInput } from '~shared/TextInput/TextInput.jsx';
import { Button } from '~shared/button.js';
import { Description } from './description';
import { Break } from './break';
import { Section } from './section';
import { Form } from './form';
import { ControllSetWrapper } from './controlSetWrapper';
import { TagWrapper } from './tagWrapper';

export const Popup = () => {
	return (
		<PopupContainer>
			<Heading as="h3">Налоговый вычет</Heading>
			<PictureButton type="button" aria-label="Закрыть" url={`/assets/img/close.svg`} />
			<Description>
				Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер налогового вычета составляет
				<Break /> не более 13% от своего официального годового дохода.
			</Description>
			<Section>
				<Heading as="h4" visuallyHidden>Расчет налогового вычета на основании зарплаты</Heading>
				<Form action="">
					<Fieldset bottom={10}>
						<TextInput invalid={false} validateMessage="Поле обязательно для заполнения"/>
						<Button text type="button">Рассчитать</Button>
					</Fieldset>
					<Fieldset bottom={20}>
						<Legend short>Итого можете внести в качестве досрочных:</Legend>
						<Checkbox name="payment" value="1" text={`78 000 рублей`} subText={`в 1-ый год`} />
						<Checkbox name="payment" value="2" checked text={`68 000 рублей`} subText={`в 2-ой год`} />
						<Checkbox name="payment" value="3" checked disabled text={`58 000 рублей`} subText={`в 3-ий год`} />
						<Checkbox name="payment" value="4" disabled text={`32 000 рублей`} subText={`в 4-ий год`} />
					</Fieldset>
					<Fieldset aria-labelledby="fake-legend-reduce">
						<ControllSetWrapper>
						<Heading id="fake-legend-reduce" as="h2" aria-hidden="true" subheading tags>Что уменьшаем?</Heading>
							<TagWrapper>
								<Radio name="reduce" value="payment" checked>Платеж</Radio>
								<Radio name="reduce" value="term">Срок</Radio>
							</TagWrapper>
						</ControllSetWrapper>
						<Button small type="button">Добавить</Button>
					</Fieldset>
				</Form>
			</Section>
		</PopupContainer>
	);
}

