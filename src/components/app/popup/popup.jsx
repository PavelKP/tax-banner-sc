import React from 'react';
import styled from 'styled-components';
import { Checkbox } from '../../shared/checkbox/checkbox';
import { PictureButton } from '../../shared/pictureButton';
import { Radio } from '../../shared/radio/radio';
import { Heading } from './heading';

export const Popup = (props) => {

	/* Add "popup--enlarged" class to popup with additional controls and etc */
	return (
			<article className="popup">
				<Heading>Налоговый вычет</Heading>
				<PictureButton type="button" aria-label="Закрыть" url={`/assets/img/close.svg`} />
				<p className="popup__description">Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер налогового вычета составляет <br className="popup__break"/> не более 13% от своего официального годового дохода.</p>
				<section className="popup__count">
					<h4 className="visually-hidden">Расчет налогового вычета на основании зарплаты</h4>
					<form className="form" action="">
						<fieldset className="fieldset-reset">
							<legend className="form__subheading">Ваша зарплата в месяц</legend>
							<input className="form__input" type="text" placeholder="50 000 &#8381;" />
							<p className="form__tooltip">Поле обязательно для заполнения</p>
							<button className="button button--text" type="button">Рассчитать</button>
						</fieldset>
					</form>
					<form className="form" action="">
						<fieldset className="from__control-set fieldset-reset">
							<legend className="form__subheading form__subheading--short">
								Итого можете внести в качестве досрочных:
							</legend>
							<Checkbox name="payment" value="1" text={`78 000 рублей`} subText={`в 1-ый год`}/>
							<Checkbox name="payment" value="2" checked text={`68 000 рублей`} subText={`в 2-ой год`}/>
							<Checkbox name="payment" value="3" checked disabled text={`58 000 рублей`} subText={`в 3-ий год`}/>
							<Checkbox name="payment" value="4" disabled text={`32 000 рублей`} subText={`в 4-ий год`}/>
						</fieldset>
						<fieldset className="from__control-set fieldset-reset" aria-labelledby="fake-legend-reduce">
							<div className="form__control-set-wrapper">
								<h2 id="fake-legend-reduce" className="form__subheading form__subheading--tags" aria-hidden="true">
									Что уменьшаем?
								</h2>
								<div className="form__tags-wrapper">
									<Radio name="reduce" value="payment" checked>Платеж</Radio>
									<Radio name="reduce" value="term" checked>Срок</Radio>
								</div>
							</div>
							<button className="button button--small" type="button">Добавить</button>
						</fieldset>
					</form>
				</section>
			</article>
  );
}

