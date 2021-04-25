import React from 'react';
import { Checkbox } from '~shared/Checkbox/Checkbox';
import { PictureButton } from '~shared/pictureButton';
import { Radio } from '~shared/Radio/Radio';
import { Heading } from '~shared/heading';
import { Fieldset } from '~shared/fieldset';
import { PopupContainer } from './popupContainer';
import { Legend } from '~shared/legend';
import { TextInput } from '~shared/TextInput/TextInput.jsx';
import { Description } from './description';

export const Popup = (props) => {
	return (
		<PopupContainer>
			<Heading as="h3">Налоговый вычет</Heading>
			<PictureButton type="button" aria-label="Закрыть" url={`/assets/img/close.svg`} />
			<Description>
				Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер налогового вычета составляет
				<br className="popup__break" /> не более 13% от своего официального годового дохода.
			</Description>
			<section className="popup__count">
				<Heading as="h4" visuallyHidden>Расчет налогового вычета на основании зарплаты</Heading>
				<form className="form" action="">
					<Fieldset bottom={10}>
						<TextInput />
						<button className="button button--text" type="button">Рассчитать</button>
					</Fieldset>
					<Fieldset bottom={20}>
						<Legend short>Итого можете внести в качестве досрочных:</Legend>
						<Checkbox name="payment" value="1" text={`78 000 рублей`} subText={`в 1-ый год`} />
						<Checkbox name="payment" value="2" checked text={`68 000 рублей`} subText={`в 2-ой год`} />
						<Checkbox name="payment" value="3" checked disabled text={`58 000 рублей`} subText={`в 3-ий год`} />
						<Checkbox name="payment" value="4" disabled text={`32 000 рублей`} subText={`в 4-ий год`} />
					</Fieldset>
					<Fieldset aria-labelledby="fake-legend-reduce">
						<div className="form__control-set-wrapper">
							<h2 id="fake-legend-reduce" className="form__subheading form__subheading--tags" aria-hidden="true">
								Что уменьшаем?
								</h2>
							<div className="form__tags-wrapper">
								<Radio name="reduce" value="payment" checked>Платеж</Radio>
								<Radio name="reduce" value="term">Срок</Radio>
							</div>
						</div>
						<button className="button button--small" type="button">Добавить</button>
					</Fieldset>
				</form>
			</section>
		</PopupContainer>
	);
}

