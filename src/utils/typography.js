import Typography from "typography";

const typography = new Typography({
  baseFontSize: '18px',
  headerFontFamily: ['Helvetica', 'sans-serif'],
  bodyFontFamily: ['Helvetica', 'sans-serif'],
  baseLineHeight: 2.5,
});


export default typography;
export const rhythm = typography.rhythm;