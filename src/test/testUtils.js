export const findByTestAttr = (wrapper, val) => {
  console.log(wrapper, 'wrapper');
  return wrapper.find(`[data-test="${val}"]`);
}