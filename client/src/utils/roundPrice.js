export const roundPrice = arr => {
  return arr.map(el => {
    el.price = Math.floor(el.price);
    return el;
  });
};
