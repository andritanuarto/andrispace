import Typography from "typography";

const typography = new Typography({
  baseFontSize: '18px',
  headerFontFamily: ['DM Serif Display', 'sans-serif'],
  bodyFontFamily: ['Heebo', 'sans-serif'],
  baseLineHeight: 1.5,
});


export default typography;
export const rhythm = typography.rhythm;