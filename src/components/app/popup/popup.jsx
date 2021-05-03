import React, {useRef, useState} from 'react';
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
import { TaxOptions } from './TaxOptions/TaxOptions';

export const Popup = () => {
	const formRef = useRef();
	const salaryRef = React.createRef();

	const [salary, setSalary] = useState(``);
	const [invalid, setInvalid] = useState(false);

	const [isOptions, setIsOptions] = useState(false);

	const handleSalarySubmit = () => {
		if (parseInt(salary) > 0 && parseInt(salary) <= 1000000) {
			setIsOptions(salary);
			setInvalid(false);
		} else {
			setInvalid(true);
		}
	}

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
						<TextInput
							name="salary"
							value={salary}
							onChange={(evt) => setSalary(evt.target.value)}
							invalid={invalid}
							validateMessage="Введите сумму от 1 руб. до 1 000 000 руб."/>
						<Button text type="button" onClick={handleSalarySubmit}>Рассчитать</Button>
					</Fieldset>
				</Form>
				{isOptions && <TaxOptions />}
			</Section>
		</PopupContainer>
	);
}

