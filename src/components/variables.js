const Font = {
	labGrotesque: `"lab-grotesque", "Arial", sans-serif`,
	labGrotesqueMedium: `"lab-grotesque-medium", "Arial", sans-serif`,
}
const Color = {
	black: `#000000`,
	blackTransparent: `rgba(0, 0, 0, 0.3)`,
	grey: `#808080`,
	greyLight: `#bec5cc`,
	greyWhite: `#eef0f2`,
	greyBlue:` #dfe3e6`,
	white: `#ffffff`,
	crimson: `#ea0029`,
	orange: `#f53a31`,
	redIntense: `#ea0029`,
}
const Graradient = {
	crimson: `linear-gradient(255deg, #dc3131 0%, #ff4f4f 100%)`,
}
const Shadow = {
	red: `0 0 24px rgba(234, 0, 41, 0.33)`,
}
const Outlie = {
	outline: `1px solid rgba(234, 0, 41, 0.33)`,
}
const Cursor = {
	hand: `url("/assets/img/cursor-hand.svg"), pointer`,
}
const Resolution = {
	mobileS: 320,
	mobileM: 375,
	mobileL: 425,
	tablet: 768,
	laptop: 1024,
	laptopL: 1440,
	desktop: 2560,
}
const MediaQuery = {
	mobileS: `(min-width: ${Resolution.mobileS}px)`,
	mobileM: `(min-width: ${Resolution.mobileM}px)`,
	mobileL: `(min-width: ${Resolution.mobileL}px)`,
  tablet: `(min-width: ${Resolution.tablet}px)`,
  laptop: `(min-width: ${Resolution.laptop}px)`,
  laptopL: `(min-width: ${Resolution.laptopL}px)`,
  desktop: `(min-width: ${Resolution.desktop}px)`,
  desktopL: `(min-width: ${Resolution.desktop}px)`,
}

export default {
	Font,
	Color,
	Graradient,
	Shadow,
	Outlie,
	Cursor,
	MediaQuery,
};
