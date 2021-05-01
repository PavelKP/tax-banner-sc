import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import Variable from '../../variables';

export const GlobalStyle = createGlobalStyle`
	${normalize()}

  body {
    min-width: 320px;
    margin: 0;
    padding: 0;

    font-family: ${Variable.Font.labGrotesque};
    font-size: 14px;
    line-height: 24px;
    font-weight: 400;
    color: ${Variable.Color.black};

    background-color: ${Variable.Color.blackTransparent};
  }

  img {
    max-width: 100%;
    height: auto;
  }

	a {
		text-decoration: none;
	}

	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	/* remove cross-button in IE forms */
	input::-ms-clear {
		display: none;
	}

	@font-face {
		font-family: "lab-grotesque";
		src: url("/assets/fonts/lab-grotesque-regular.woff2") format("woff2"),
			url("/assets/fonts/lab-grotesque-regular.woff") format("woff");
		font-style: normal;
		font-display: swap;
		font-weight: 400;
	}

	@font-face {
		font-family: "lab-grotesque-medium";
		src: url("/assets/fonts/lab-grotesque-medium.woff2") format("woff2"),
			url("/assets/fonts/lab-grotesque-medium.woff") format("woff");
		font-style: normal;
		font-display: swap;
		font-weight: 500;
	}
`;
